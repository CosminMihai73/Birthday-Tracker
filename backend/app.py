from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime, date
from models import db, Member
import config

app = Flask(__name__)
app.config.from_object(config.Config)
CORS(app)
db.init_app(app)

with app.app_context():
    db.create_all()

def calculate_age(birth_date):
    today = datetime.today()
    return today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))

@app.route('/add_member', methods=['POST'])
def add_member():
    data = request.json
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    birth_date_str = data.get('birth_date')
    country = data.get('country')
    city = data.get('city')
    email = data.get('email')

    if not (first_name and last_name and birth_date_str and country and city and email):
        return jsonify({'error': 'All fields are required.'}), 400

    birth_date = datetime.strptime(birth_date_str, '%Y-%m-%d').date()
    if calculate_age(birth_date) < 18:
        return jsonify({'error': 'Member must be at least 18 years old.'}), 400

    new_member = Member(
        first_name=first_name,
        last_name=last_name,
        birth_date=birth_date,
        country=country,
        city=city,
        email=email
    )

    try:
        db.session.add(new_member)
        db.session.commit()
        return jsonify({
            'message': 'Member successfully added to the database.',
            'member': new_member.to_dict()
        }), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@app.route('/members', methods=['GET'])
def get_members():
    members = Member.query.all()
    today = date.today()
    sorted_members = sorted(members, key=lambda x: (x.birth_date.replace(year=today.year) if x.birth_date.replace(year=today.year) >= today else x.birth_date.replace(year=today.year + 1)))
    return jsonify([member.to_dict() for member in sorted_members])

@app.route('/search_members', methods=['GET'])
def search_members():
    query = request.args.get('q', '')
    if not query:
        return jsonify({'error': 'Query parameter is required.'}), 400

    search = "%{}%".format(query)
    results = Member.query.filter(
        (Member.first_name.ilike(search)) |
        (Member.last_name.ilike(search)) |
        (Member.country.ilike(search)) |
        (Member.city.ilike(search)) |
        (Member.email.ilike(search))
    ).all()

    return jsonify([member.to_dict() for member in results])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

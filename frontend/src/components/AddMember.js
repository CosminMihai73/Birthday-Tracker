import React, { useState } from 'react';
import { MDBInput, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { addMember } from '../services/memberService';

const AddMember = () => {
  const [member, setMember] = useState({
    first_name: '',
    last_name: '',
    birth_date: '',
    country: '',
    city: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addMember(member);
      setMessage(response.message);
      setError('');
    } catch (error) {
      setError(error.error);
      setMessage('');
    }
  };

  return (
    <MDBContainer className="mt-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <h2>Add Member</h2>
          {message && <p style={{ color: 'green' }}>{message}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <MDBInput 
              className="mb-4" 
              label="First Name" 
              type="text" 
              name="first_name" 
              onChange={handleChange} 
              value={member.first_name}
            />
            <MDBInput 
              className="mb-4" 
              label="Last Name" 
              type="text" 
              name="last_name" 
              onChange={handleChange} 
              value={member.last_name}
            />
            <MDBInput 
              className="mb-4" 
              label="Birth Date" 
              type="date" 
              name="birth_date" 
              onChange={handleChange} 
              value={member.birth_date}
            />
            <MDBInput 
              className="mb-4" 
              label="Country" 
              type="text" 
              name="country" 
              onChange={handleChange} 
              value={member.country}
            />
            <MDBInput 
              className="mb-4" 
              label="City" 
              type="text" 
              name="city" 
              onChange={handleChange} 
              value={member.city}
            />
            <MDBInput 
              className="mb-4" 
              label="Email" 
              type="email" 
              name="email" 
              onChange={handleChange} 
              value={member.email}
            />
            <MDBBtn type="submit" className="mb-4" block>
              Add Member
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AddMember;

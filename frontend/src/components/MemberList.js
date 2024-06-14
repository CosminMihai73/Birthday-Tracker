import React, { useEffect, useState } from 'react';
import { getMembers } from '../services/memberService';
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await getMembers();
        setMembers(data);
        setFilteredMembers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMembers();
  }, []);

  useEffect(() => {
    const results = members.filter(member =>
      member.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.birth_date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMembers(results);
  }, [searchTerm, members]);

  return (
    <MDBContainer className="mt-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="8">
          <h2>Member List</h2>
          <MDBInput 
            className="mb-4" 
            type="text" 
            label="Search Members" 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <MDBTable striped>
            <MDBTableHead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birth Date</th>
                <th>Country</th>
                <th>City</th>
                <th>Contact</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {filteredMembers.map((member, index) => (
                <tr key={member.id}>
                  <td>{index + 1}</td>
                  <td>{member.first_name}</td>
                  <td>{member.last_name}</td>
                  <td>{member.birth_date}</td>
                  <td>{member.country}</td>
                  <td>{member.city}</td>
                  <td>
                    <MDBBtn 
                      color="primary" 
                      size="sm" 
                      href={`mailto:${member.email}`}
                    >
                     Email
                    </MDBBtn>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default MemberList;

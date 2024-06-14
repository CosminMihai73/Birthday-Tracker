import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBNavbar,
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';

const Navbar = () => {
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <nav aria-label='breadcrumb'>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <Link to="/">Home</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <Link to="/add-member">Add Member</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active aria-current='page'>
              <Link to="/members">Member List</Link>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </nav>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;

import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit';

const Home = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="8" className="text-center">
          <MDBTypography tag="h1" className="mb-4">
            Datavid Cake Tracker
          </MDBTypography>
          <MDBTypography tag="p" className="lead mb-4">
            Welcome to the <strong>Datavid Cake Tracker</strong> – your ultimate solution for celebrating the special moments of our Datavid family. In the bustling world of a remote, multinational company, it can be challenging to keep track of everyone's birthdays and ensure that no one is left out of the celebrations.
          </MDBTypography>
          <MDBTypography tag="p" className="lead mb-4">
            Our Cake Tracker is designed to bridge this gap, bringing all the members of Datavid together in one unified platform. Here, you can easily add each team member along with their birthdays, ensuring we never miss an opportunity to celebrate the wonderful people who make Datavid exceptional.
          </MDBTypography>
          <MDBTypography tag="p" className="lead">
            By using the Datavid Cake Tracker, we aim to foster a closer-knit community, despite the geographical distances, and make our workplace more cohesive and celebratory. Let's make every birthday a shared joy and strengthen our bond as a truly global team.
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;

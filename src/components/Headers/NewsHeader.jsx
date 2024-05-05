import React from 'react';
import {
  MDBIcon,
} from 'mdb-react-ui-kit';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NewsHeader = () => {
    return (
    <div>

    <Navbar expand="lg" className="w3-black">
      <Container fluid>
      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{color:'white'}}>About</Nav.Link>
            <Nav.Link href="#action2" style={{color:'white'}}>Contact</Nav.Link>
    
            <Nav.Link href="#" disabled>
            </Nav.Link>
          </Nav>
          <div className='d-flex me-2 justify-content-center'>
 <span className='mx-1'>
      <MDBIcon fab icon='twitter' />
      </span>
   <span className='mx-2'>
      <MDBIcon fab icon='facebook-f'/>
      </span>
   <span className='mx-1'>
       <MDBIcon fab icon="instagram"/>
       </span>
     <span className='mx-2'>
       <MDBIcon fab icon='pinterest'/>
       </span>
       <span className='mx-1'>
       <MDBIcon fab icon='google'/>
       </span>
       </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}


export default NewsHeader;
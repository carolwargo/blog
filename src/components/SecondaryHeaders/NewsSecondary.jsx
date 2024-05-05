import React, { useState } from 'react';
//import {motion} from 'framer-motion';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const NewsSecondary = () => {
  const [openNavText, setOpenNavText] = useState(false);
    return (
    <div>

    <header className='w3-light-gray w3-padding-24 text-black shadow w3-hide-small'>
      <MDBNavbar expand='lg' >
      <MDBContainer fluid className='align-items-center text-black'>
        
        <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavText(!openNavText)}
          className='justify-content-center align-items-center text-black'
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-center align-items-center'>
          <MDBNavbarItem >
  <Link to="/" className='nav-link text-black fw-bolder' aria-current="page" >Home</Link>
</MDBNavbarItem>
<MDBNavbarItem className='mx-2'>
  <Link to="/blog" className='nav-link text-black fw-bolder'>Culture</Link>
</MDBNavbarItem>
<MDBNavbarItem className='mx-2'>
  <Link to="/news" className='nav-link text-black fw-bolder'>Fitness</Link>
</MDBNavbarItem>
<MDBNavbarItem className='mx-2'>
  <Link to="/blog" className='nav-link text-black fw-bolder'>Lifestyle</Link>
</MDBNavbarItem>
<MDBNavbarItem>
  <Link to="/news" className='nav-link text-black fw-bolder'>Sports</Link>
</MDBNavbarItem>
<MDBNavbarItem>
  <Link to="/news" className='nav-link text-black fw-bolder'>Travel</Link>
</MDBNavbarItem>

          </MDBNavbarNav>
    
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    </header>

    </div>
  );
}


export default NewsSecondary;
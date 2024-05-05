import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import HeaderImage2 from '../../assets/images/HeaderImage2.jpeg';

export default function App() {

  const [openNavText, setOpenNavText] = useState(false);

  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid className='align-items-center text-black'>
        
        <MDBNavbarBrand as='/'>
          <i className='fa fa-feather text-muted' >
            </i>
            </MDBNavbarBrand>
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
          <MDBNavbarItem>
  <Link to="/" className="nav-link" aria-current="page" style={{fontSize:'18px'}}>Home</Link>
</MDBNavbarItem>
<MDBNavbarItem>
  <Link to="/" className="nav-link"style={{fontSize:'18px'}}>Personal</Link>
</MDBNavbarItem>
<MDBNavbarItem>
  <Link to="/" className="nav-link" style={{fontSize:'18px'}}>News</Link>
</MDBNavbarItem>
          </MDBNavbarNav>
        <span className='navbar-text text-muted'>     
        <i className='fa fa-lock'></i>
        </span>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    <div
  className='p-5 text-center bg-image position-relative'
  style={{ 
    backgroundImage: `url(${HeaderImage2})`,
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div 
    className='position-absolute top-0 start-0 end-0 bottom-0 mask' 
    style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
  >

          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-black'>
              <h1 className='mb-3'>BLOG TITLE</h1>
              <h4 className='mb-3'>By: Blogger</h4>
              <p>
                Welcome to my blog. Subscribe and get my latest blog post in your inbox.</p>
              
              <div>
                <Link to='#popular-posts'>
              <MDBBtn color='dark' size='sm' className='mx-1 px-4 btn-outline-light'>
              Subscribe
              </MDBBtn>
              </Link>
              <Link to='#popular-posts'>
              <MDBBtn color='dark' size="sm" className='mx-1 px-3  btn-outline-light'>
              Popular Posts
              </MDBBtn>
              </Link>
             </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
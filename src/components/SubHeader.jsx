import React from 'react';
import { Link } from 'react-router-dom';    
import { FaCoffee, FaGlassWhiskey } from 'react-icons/fa';

const SubHeader = () => {

    return (

        <div className='blog' id='blog'>
<div className="container-fluid bg-light">
  <div className="row justify-content-between align-items-center w3-pale-blue">
    <div className="col-auto">
        <Link to='/' className='link-dark text-decoration-none'>
      <p className="m-3">Home</p>
      </Link>
    </div>
    <div className="col-auto">

    <span>
    <Link to='/blog' className='link-dark text-decoration-none mx-1'>
    <FaCoffee className='mx-1'/>  

   Blog
      </Link>
      </span>
     <span> 
      <Link to='/news' className='link-dark text-decoration-none mx-1'>
      <FaGlassWhiskey className='mx-1'/>  
     Newspaper
      </Link>
      </span>
    
    </div>
  </div>
</div>



        </div>

    );
}

export default SubHeader;
import React from 'react';
import { Link } from 'react-router-dom';    
import { FaCoffee} from 'react-icons/fa';

const SubHeader = () => {

    return (

        <div>
<div className="container-fluid w3-light-gray">
  <div className="row justify-content-between align-items-center ">
    <div className="col-auto">
        <Link to='/' className='link-dark text-decoration-none'>
      <p className="m-3">Home</p>
      </Link>
    </div>
    <div className="col-auto">

    <span>
    <Link to='/blog' className='link-dark text-decoration-none mx-1'>
    <FaCoffee className='mx-1'/>  
      </Link>
      </span>
     <span> 
      <Link to='/news' className='link-dark text-decoration-none mx-1'>
     Newsletter
      </Link>
      </span>
    
    </div>
  </div>
</div>



        </div>

    );
}

export default SubHeader;
import React from 'react';
import {motion} from 'framer-motion';
import { GiNewspaper } from "react-icons/gi";
import { Button } from 'react-bootstrap';
import Business from '../assets/images/Business.png';  
import NewsSecondary from '../components/SecondaryHeaders/NewsSecondary';
import '../App.css';


const News = () => {

    return (

        <div className='news' id='news'>
<div className="container-fluid bg-light">
  <div className="row justify-content-between align-items-center w3-white w3-padding-24">
    <div className="col-auto">
  
    </div>
    <div className="col-auto center">
      <h1><GiNewspaper/> <strong>NEWS!</strong></h1>  
    </div>
    <div className="col-auto">  
    </div>
  </div>
</div>
<NewsSecondary/>


<div className="container-fluid bg-light">
                <div className='w3-container'>
                <div className="row border p-1 shadow w3-light-gray d-flex justify-content-between align-items-center justify-content-center">
                    <div className="col-sm-12 col-md-3 col-lg-3 justify-content-between align-items-center" style={{padding:'5px'}}>
                    <motion.div className="image-container position-relative" whileHover={{ scale: 1.04 }} whileTap={{ scale: 1.1 }} style={{marginBottom:'8px'}}>
      <img src={Business} alt="business" style={{ width: '100%' }} />
    <div className="overlay-1"></div>
    <div className="text-overlay text-black">
        <Button variant="outline-dark" size="sm" className='mb-2 shadow'>
         <b>Culture</b>
        </Button>{' '}<br />
       <h6>Media figures sound alarm on White House response to college unrest, protests</h6> 
    </div>
  </motion.div>
  <motion.div className="image-container position-relative" whileHover={{ scale: 1.04 }} whileTap={{ scale: 1.1 }}>
      <img src={Business} alt="business" style={{ width: '100%' }} />
    <div className="overlay-1"></div>
    <div className="text-overlay text-black">
        <Button variant="outline-dark" size="sm" className='mb-2 shadow'>
         <b>Lifestyle</b>
        </Button>{' '}<br />
       <h6>Media figures sound alarm on White House response to college unrest, protests</h6> 
    </div>
  </motion.div>
                    </div>


              <div className="col-sm-12 col-md-6 col-lg-6 justify-content-between align-items-center"style={{padding:'5px'}} >
              <motion.div className="image-container position-relative justify-content-center" whileHover={{ scale: 1.04 }} whileTap={{ scale: 1.1 }}>
      <img src={Business} alt="business" style={{ width: '100%' }} />
    <div className="overlay-2"></div>
    <div className="text-overlay text-black">
        <Button variant="outline-dark" size="lg" className='mb-2'>
         <b>Politics</b>
        </Button>{' '}<br />
       <h4>Media figures sound alarm on White House response to college unrest, protests</h4> 
    </div>
  </motion.div>
</div>

<div className="col-sm-12 col-md-3 col-lg-3  justify-content-between align-items-center" style={{padding:'5px'}}>
                    <motion.div className="image-container position-relative" whileHover={{ scale: 1.04 }} whileTap={{ scale: 1.1 }} style={{marginBottom:'8px'}}>
      <img src={Business} alt="business" style={{ width: '100%' }} />
    <div className="overlay-3"></div>
    <div className="text-overlay text-black">
        <Button variant="outline-dark" size="sm" className='mb-2 shadow'>
         <b>Science</b>
        </Button>{' '}<br />
       <h6>Media figures sound alarm on White House response to college unrest, protests</h6> 
    </div>
  </motion.div>
  <motion.div className="image-container position-relative" whileHover={{ scale: 1.04 }} whileTap={{ scale: 1.1 }}>
      <img src={Business} alt="business" style={{ width: '100%' }} />
    <div className="overlay-3"></div>
    <div className="text-overlay text-black">
        <Button variant="outline-dark" size="sm" className='mb-2 shadow'>
         <b>Sports</b>
        </Button>{' '}<br />
       <h6>Media figures sound alarm on White House response to college unrest, protests</h6> 
    </div>
  </motion.div>
                    </div>
                </div>
                </div>
</div>




            <div className="container-fluid bg-light">
                <div className='w3-container w3-padding-top-24'>
                <div className="row justify-content-between align-items-center w3-pale-blue">
                    <div className="col-sm-12 col-md-2 col-lg-2 w3-gray">
                        <p className=" ">COLUMN 1</p>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5 w3-blue">
                        <p className=" ">COLUMN 2 Trending:</p>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 w3-black">
                        <p className="">COLUMN 3 Trending:</p>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2 w3-gray">
                        <p className="">COLUMN 4</p>
                    </div>
                </div>
                </div>
</div>
                </div>

    );
}

export default News;
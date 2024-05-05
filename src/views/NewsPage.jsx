import React from 'react';
import {motion} from 'framer-motion';
import { GiNewspaper } from "react-icons/gi";
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
    <p className="w3-tag w3-black w3-margin-bottom">Culture</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </motion.div>
  <motion.div className="image-container position-relative" whileHover={{ scale: 1.04 }} whileTap={{ scale: 1.1 }}>
      <img src={Business} alt="business" style={{ width: '100%' }} />
    <div className="overlay-1"></div>
    <div className="text-overlay text-black">
    <p className="w3-tag w3-black w3-margin-bottom">Fitness</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </motion.div>
                    </div>


              <div className="col-sm-12 col-md-6 col-lg-6 justify-content-between align-items-center"style={{padding:'5px'}} >
              <motion.div className="image-container position-relative justify-content-center" whileHover={{ scale: 1.04 }} whileTap={{ scale: 1.1 }}>
      <img src={Business} alt="business" style={{ width: '100%' }} />
    <div className="overlay-2"></div>
    <div className="text-overlay text-black">
        <p className="w3-tag w3-black w3-margin-bottom"> Lifestyle</p> 
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
             </div>
  </motion.div>
</div>

<div className="col-sm-12 col-md-3 col-lg-3  justify-content-between align-items-center" style={{padding:'5px'}}>
                    <motion.div className="image-container position-relative" whileHover={{ scale: 1.04 }} whileTap={{ scale: 1.1 }} style={{marginBottom:'8px'}}>
      <img src={Business} alt="business" style={{ width: '100%' }} />
    <div className="overlay-3"></div>
    <div className="text-overlay text-black">
     <br />
    <p className="w3-tag w3-black w3-margin-bottom">Sports </p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </motion.div>
  <motion.div className="image-container position-relative" whileHover={{ scale: 1.04 }} whileTap={{ scale: 1.1 }}>
      <img src={Business} alt="business" style={{ width: '100%' }} />
    <div className="overlay-3"></div>
    <div className="text-overlay text-black">
    <p className="w3-tag w3-black w3-margin-bottom"> Travel </p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </motion.div>
                    </div>
                </div>
                </div>
</div>




            <div className="container-fluid bg-light">
                <div className='w3-container w3-padding-top-24'>
                <div className="row justify-content-between align-items-center ">
                <div className="col-sm-12 col-md-3 col-lg-3 ">
           {/*container start for tags Header*/}
           <h5 className="w3-margin-top w3-margin-bottom w3-light-grey w3-padding-8 w3-padding">ABOUT US</h5>   
         {/*container end for tags Header*/}
         <div className="w3-container w3-white">
           {" "}
           {/*container start for tags*/}
         
             <p className="w3-tag w3-black w3-margin-bottom">
               Travel
             </p>
  
                    </div>
                    </div>
                 
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        {/*container start for tags Header*/}
           <h5 className="w3-margin-top w3-margin-bottom w3-light-grey w3-padding-8 w3-padding">FEATURED</h5>   
         {/*container end for tags Header*/}
         <div className="w3-container w3-white">
           {" "}
           {/*container start for tags*/}
         
             <p className="w3-tag w3-black w3-margin-bottom">
               Travel
             </p>
  
                    </div>
                    </div>
                       <div className="col-sm-12 col-md-3 col-lg-3 ">
           {/*container start for tags Header*/}
           <h5 className="w3-margin-top w3-margin-bottom w3-light-grey w3-padding-8 w3-padding">SOCIAL MEDIA</h5>   
         {/*container end for tags Header*/}
         <div className="w3-container w3-white">
           {" "}
           {/*container start for tags*/}
         
             <p className="w3-tag w3-black w3-margin-bottom">
               Travel
             </p>
  
                    </div>
                    </div>
                </div>
                </div>
</div>
                </div>

    );
}

export default News;



import React, {useState} from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple,
    MDBAccordion,
    MDBAccordionItem,
 
} from 'mdb-react-ui-kit';
import YogaMat from '../assets/images/YogaStory/YogaMat.png';
import YogaDay from '../assets/images/YogaStory/YogaDay.png';
import YogaMorning from '../assets/images/YogaStory/YogaMorning.png';
import YogaSteps from '../assets/images/YogaStory/YogaSteps3.png';
import YogaClass from '../assets/images/YogaStory/YogaClass.png';
import YogaMember from '../assets/images/YogaStory/YogaMember.png';

const AccordionImages = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (

<div className='text-center text-white' style={{ backgroundColor: '#caced1' }}>
<MDBContainer className='p-4'>
          <MDBRow>
          <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
          <MDBRipple
            rippleColor='light'
            className='bg-image hover-overlay shadow-1-strong rounded'
            onClick={() => toggleAccordion(0)}
          >
            <img src={YogaMat} alt='yogamat' className='w-100' />
            <a href='#!'>
              <div
                className='mask'
                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
              ></div>
            </a>
          </MDBRipple>
          <MDBAccordion accordion>
            <MDBAccordionItem uuid={0} >  
            <div className={`accordion-header ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
        </div>  
           <div className={`accordion-body ${activeIndex === 0 ? 'show' : ''}`}>
          <img src={YogaMat} alt='yogamat' className='accordion-image' />
          </div>
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCol>


        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
          <MDBRipple
            rippleColor='light'
            className='bg-image hover-overlay shadow-1-strong rounded'
            onClick={() => toggleAccordion(0)}
          >
            <img src={YogaDay} alt='yogamat' className='w-100' />
            <a href='#!'>
              <div
                className='mask'
                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
              ></div>
            </a>
          </MDBRipple>
          <MDBAccordion accordion>
            <MDBAccordionItem uuid={1}> 
            <div className={`accordion-header ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
        </div>  
           <div className={`accordion-body ${activeIndex === 1 ? 'show' : ''}`}>
                <img src={YogaDay} alt='yogamat' className='w-100' />
           </div>
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCol>


        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
          <MDBRipple
            rippleColor='light'
            className='bg-image hover-overlay shadow-1-strong rounded'
            onClick={() => toggleAccordion(0)}
          >
            <img src={YogaMorning} alt='am' className='w-100' />
            <a href='#!'>
              <div
                className='mask'
                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
              ></div>
            </a>
          </MDBRipple>
          <MDBAccordion accordion>
            <MDBAccordionItem uuid={2} >
            <div className={`accordion-header ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
        </div>  
           <div className={`accordion-body ${activeIndex === 2 ? 'show' : ''}`}>
                <img src={YogaMorning} alt='am' className='w-100' />
            </div>
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCol>

        
        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
          <MDBRipple
            rippleColor='light'
            className='bg-image hover-overlay shadow-1-strong rounded'
            onClick={() => toggleAccordion(0)}
          >
             <img src={YogaSteps} alt='steps' className='w-100'  />
            <a href='#!'>
              <div
                className='mask'
                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
              ></div>
            </a>
          </MDBRipple>
          <MDBAccordion accordion>
            <MDBAccordionItem uuid={3}> 
            <div className={`accordion-header ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
        </div>  
           <div className={`accordion-body ${activeIndex === 3 ? 'show' : ''}`}>
                 <img src={YogaSteps} alt='steps' className='w-100' />
            </div>
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCol>
          

        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
          <MDBRipple
            rippleColor='light'
            className='bg-image hover-overlay shadow-1-strong rounded'
            onClick={() => toggleAccordion(0)}
          >
            <img src= {YogaMember} alt='member' className='w-100' />
            <a href='#!'>
              <div
                className='mask'
                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
              ></div>
            </a>
          </MDBRipple>
          <MDBAccordion accordion>
            <MDBAccordionItem uuid={4}> 
            <div className={`accordion-header ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
        </div>  
           <div className={`accordion-body ${activeIndex === 4 ? 'show' : ''}`}>
                  <img src= {YogaMember} alt='member' className='w-100' />
           </   div>
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCol>

        <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
          <MDBRipple
            rippleColor='light'
            className='bg-image hover-overlay shadow-1-strong rounded'
            onClick={() => toggleAccordion(0)}
          >
              <img src={YogaClass} alt='class' className='w-100' />
            <a href='#!'>
              <div
                className='mask'
                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
              ></div>
            </a>
          </MDBRipple>
          <MDBAccordion accordion>
            <MDBAccordionItem uuid={5}> 
            <div className={`accordion-header ${activeIndex === 5 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
        </div>  
           <div className={`accordion-body ${activeIndex === 5 ? 'show' : ''}`}>
                    <img src={YogaClass} alt='class' className='w-100' />
            </div>
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCol>
          </MDBRow>
      </MDBContainer>
      </div>
    );
}

export default AccordionImages;


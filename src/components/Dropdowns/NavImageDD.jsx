import React from 'react';
import {
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';
  import YogaMat from '../../assets/images/YogaStory/YogaMat.png';
  import YogaDay from '../../assets/images/YogaStory/YogaDay.png';
  import YogaMorning from '../../assets/images/YogaStory/YogaMorning.png';
  import YogaSteps from '../../assets/images/YogaStory/YogaSteps3.png';
  import YogaClass from '../../assets/images/YogaStory/YogaClass.png';
  import YogaMember from '../../assets/images/YogaStory/YogaMember.png';

import { Dropdown, DropdownButton,  } from 'react-bootstrap';

const renderImages = () => {
  return (
<section className='mb-2'>
            
            <MDBRow>

              <MDBCol lg='2' md='12' className='justify-content-evenly'  >
             
                  <img src={YogaMat} alt='yogamat' className='w-50'/>
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
             
                <p>Lorem ipsum dolor elit.</p>
              </MDBCol>
              <MDBCol lg='2' md='12' >
             
                  <img src={YogaDay} alt='yogaday' className='w-50'/>
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
             
               
                <p>Lorem ipsum dolor elit.</p>
              </MDBCol>
              <MDBCol lg='2' md='12' >
             
                  <img src={YogaMorning} alt='yogamorning' className='w-50' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
             
                 <p>Lorem ipsum dolor elit.</p>
              </MDBCol>
              <MDBCol lg='2' md='12' >
             
                  <img src={YogaSteps} alt='steps' className='w-50' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
             
                 <p>Lorem ipsum dolor elit.</p>
              </MDBCol>
              <MDBCol lg='2' md='12' >
             
                  <img src={YogaClass} alt='class' className='w-50' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
             
                <p>Lorem ipsum dolor elit.</p>
              </MDBCol>
              <MDBCol lg='2' md='12' >
             
                  <img src= {YogaMember} alt='member' className='w-50' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
             
                <p>Lorem ipsum dolor elit.</p>
              </MDBCol>
            </MDBRow>
          </section>
  );
};

const DropdownImages = () => {
  return (
    <DropdownButton
      id='dropdown-item-button'
      title='Select Images'
      variant='secondary'
    >
      <Dropdown.ItemText>
        {/* Place your text or instructions here */}
      </Dropdown.ItemText>
      <Dropdown.Item as='div'>
        {renderImages()}
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default DropdownImages;

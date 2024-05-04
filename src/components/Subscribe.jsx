import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCheckbox
} from "mdb-react-ui-kit";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using Email.js
    const templateParams = {
      email_address: email,
    };

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      templateParams,
      "YOUR_USER_ID"
    )
    .then((response) => {
      console.log("Email sent successfully!", response);
      alert("Thank you for subscribing!");
    })
    .catch((error) => {
      console.error("Email failed to send!", error);
      alert("Oops! Something went wrong. Please try again.");
    });

    // Reset form
    setEmail("");
  };

  return (
    <MDBFooter className="w3-padding-64 text-black text-lg-left w3-light-gray">
      <MDBContainer className="p-4 ">
      <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol md="6" size="12" className="mb-4 mb-md-0">
            <MDBContainer className="w3-card w3-padding-large w3-padding-24">
         
            <form onSubmit={handleSubmit}>
            <MDBRow className="d-flex text-lg-left">
                <MDBCol md="12" size="12" >
                    <p className="pt-2">
                        <strong>Suscribe to our blog!</strong>
                    </p>
                  <MDBInput
                    type="email"
                    id="user_email"
                    className='bg-white border border-3 '
                    placeholder="Email address"
                    contrast
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    labelStyle={{ fontSize: '13px', color:'black' }} 
                  />
        
    
                </MDBCol>
                </MDBRow>
                <MDBRow className="d-flex text-lg-left">
                <MDBCol md="8" size="8">
                <MDBCheckbox className='w3-white'
        wrapperClass='d-flex w3-margin-top link-offset-1-hover mt-2'
        id='form5Example3'
        label={ 
        <span className="text-black"> I agree to the <a href="/terms-and-conditions" className="text-decoration-underline text-secondary"> terms & conditions</a>.
          </span>
        }
        defaultChecked
        required
        labelStyle={{ fontSize: '13px', color:'black' }} 
      />
                </MDBCol>
                <MDBCol md="4" size="4" className="text-start">
                  <MDBBtn color="dark" type="submit" className='mt-3'>
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="6" size="12" className="mb-4 mb-md-0">
            <div
              className="text-center p-5"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >

              <p>
              Subscribe to receive real-time updates, exclusive offers, promotions, early access to new services products, be the first to know about upcoming events or our new innovative approaches: tricks, insights and more. 
              </p>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="d-flex justify-content-center"></MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

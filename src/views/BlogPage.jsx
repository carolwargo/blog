import React from "react";
import YogaProfilePic from "../assets/images/YogaProfilePic.jpeg";
import PostsShare from "../components/PostsShare";
import Subscribe from "../components/Subscribe";  
import ImageFooter from "../components/ImageFooter";
import Journal from "../assets/images/Journal.png"; 
import Pagination from '../components/Pagination'

const BlogPage = () => {
  return (
    <div className="blog" id="blog">
      <div>
        <div className="">
          <div style={{ maxWidth: "1400px" }}>

          <div className="w3-row w3-padding-top-24">

          <div className="w3-col l4 w3-padding">
          
          {/*card start for bio*/}
          <div className="w3-container">
           
            {/*card-image-start for bio*/}
            <img
              src={YogaProfilePic}
              alt="blog-profile"
              style={{ width: "100%" }}
              className="w3-opacity w3-hover-opacity-off"
            ></img>{" "}
            {/*card-image-start for bio*/}
           
              {" "}
              {/*card-container-start for bio*/}
              <br></br>
              <h5 className="mt-3" style={{ fontFamily: "sans-serif" }}>
                <b>Your Name</b>
              </h5>
              <p className="mb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit vel harum odio nihil maxime dolorem explicabo
                blanditiis, optio eaque quasi vero quae nostrum voluptates.
                Non natus minus omnis ipsa in!{" "}
              </p>
              <br></br>
            </div>

          <hr />
            {" "}
             
      

          <div className="w3-container">
            {" "}
         
              {/*container start for tags Header*/}
              <h4>Tags</h4>
            </div>{" "}
            {/*container end for tags Header*/}
            <div className="w3-container w3-white">
              {" "}
              {/*container start for tags*/}
              <p>
                <span className="w3-tag w3-black w3-margin-bottom">
                  YOGA
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                 MANTRA
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  LIFESTYLE
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  LOTUS
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  NORWAY
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  MEDITATE
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  IDEAS
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                 MATERNITY
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  PEACE
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  BREATHE
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                 CLASSES
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                 SELFHELP
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  SPORT
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  CENTERED
                </span>
              </p>
          </div>
              {/*card start for bio*/}
              <div className="w3-container">
           <hr />
           {/*card-image-start for bio*/}
           <img
             src={Journal}
             alt="blog-profile"
             style={{ width: "100%" }}
             className="w3-opacity w3-hover-opacity-off w3-margin-top"
           ></img>{" "}
           {/*card-image-start for bio*/}
          
             {" "}
             {/*card-container-start for bio*/}
             <br></br>
             <h5 className="mt-3" style={{ fontFamily: "sans-serif" }}>
               <b>Yoga Journal</b>
             </h5>
             <p className="mb-3">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Impedit vel harum odio nihil maxime dolorem explicabo
               blanditiis, optio eaque quasi vero quae nostrum voluptates.
               Non natus minus omnis ipsa in!{" "}
             </p>
             <br></br>
           </div>
           {" "}
        </div>
        <div className="w3-col l8 w3-padding" id="popular-posts">
        <ImageFooter/>
        <br />
        <hr />
        <br />
        <PostsShare/> 
</div>
<div className="w3-container d-flex w3-margin-top w3-padding-16 justify-content-center">
        <Pagination/>
        </div>

            </div>
            
<Subscribe/>
         {/*Start Subscribe */}
           {/*Start Subscribe 
            <div className="w3-padding-48 w3-black" id="contact">
             <div className='w3-container w3-content'>
              <div className="row justify-content-center align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6 w3-margin-top">
                  <div className="w3-container">
                    <form action="/action_page.php" target="_blank">
                      <input
                        className="w3-input w3-border"
                        type="text"
                        placeholder="Name"
                        required
                        name="Name"
                      />
                      <input
                        className="w3-input w3-section w3-border"
                        type="text"
                        placeholder="Email"
                        required
                        name="Email"
                      />
                      <div className="d-flex justify-content-start">
                        {" "}
                     
                        <button
                          className="w3-button w3-white w3-section"
                          type="submit"
                        >
                          <i className="fa fa-paper-plane"></i> SUBMIT
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="w3-content w3-container">
                    <h1 className="w3-border-light-grey w3-padding-16">
                      <b>SUBSCRIBE</b>
                    </h1>
                    <p>
                      {" "}
                      Join our community to unwrap exclusive content, dazzling
                      updates, and behind-the-scenes secrets! Be the first to
                      discover our latest news, captivating stories, and
                      fabulous giveaways. Become part of our circle today!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          */}
    {/*End Subscribe */}
            {/*End Page Container */}

    
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

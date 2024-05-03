import React from "react";
import WomanReading from "../assets/images/WomanReading.jpg";
import Business from "../assets/images/Business.png";
import PostsShare from "../components/PostsShare";


const BlogPage = () => {
  return (
    <div className="blog" id="blog">
      <div>
        <div className="">
          <div style={{ maxWidth: "1400px" }}>

          <div className="w3-row">

          <div className="w3-col l4 w3-padding">
          
          {/*card start for bio*/}
          <div className="w3-container">
           
            {/*card-image-start for bio*/}
            <img
              src={WomanReading}
              alt="blog-profile"
              style={{ width: "100%" }}
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
            {/*card start for all popular posts elements*/}
            <div className="w3-container">
              {/*container start header popular posts */}
              <h4>Popular Posts</h4>
            </div>
            {/*container end header popular posts */}
            <ul className="w3-ul w3-hoverable w3-white">
              {/*list start popular posts */}
              <li className="w3-padding-16 ">
                {" "}
                {/*list-item-4 start popular posts */}
                <img
                  src={Business}
                  alt="Business"
                  className="w3-left w3-margin-right"
                  style={{ width: "15%" }}
                ></img>
                <span className="w3-large">Title</span>
                <br />
                <span>Sed mattis nunc</span>
              </li>
              {/*list-item-1 end popular posts */}
              <li className="w3-padding-16 ">
                {" "}
                {/*list-item-4 start popular posts */}
                <img
                  src={Business}
                  alt="Business"
                  className="w3-left w3-margin-right"
                  style={{ width: "15%" }}
                ></img>
                <span className="w3-large">Title</span>
                <br />
                <span>Sed mattis nunc</span>
              </li>
              {/*list-item-2 end popular posts */}
              <li className="w3-padding-16">
                {/*list-item-3 start popular posts */}
                <img
                  src={Business}
                  alt="Business"
                  className="w3-left w3-margin-right"
                  style={{ width: "15%" }}
                ></img>
                <span className="w3-large">Title</span>
                <br></br>
                <span>Sed mattis nunc</span>
              </li>
              {/*list-item-3 end popular posts */}
              <li className="w3-padding-16 ">
                {" "}
                {/*list-item-4 start popular posts */}
                <img
                  src={Business}
                  alt="Business"
                  className="w3-left w3-margin-right"
                  style={{ width: "15%" }}
                ></img>
                <span className="w3-large">Title</span>
                <br />
                <span>Sed mattis nunc</span>
              </li>
              {/*list-item-4 end popular posts */}
            </ul>
            {/*list end popular posts */}
     
          {/*card end for all popular posts elements*/}
          <hr />
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
                  Travel
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  New York
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  London
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  IKEA
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  NORWAY
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  DIY
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Ideas
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Baby
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Family
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  News
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Clothing
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Shopping
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Sports
                </span>
                <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                  Games
                </span>
              </p>
          </div>
        </div>
        <div className="w3-col l8 w3-padding">
          <PostsShare/>
</div>
            </div>

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

            <br />
            <div className="w3-container d-flex w3-white justify-content-around"></div>
            {/*row end for the whole page with exception of header & footer */}

            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

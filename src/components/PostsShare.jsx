import React from "react";
import moment from "moment";
import YogaSet from "../assets/images/YogaSet.png";
import {
  TwitterShareButton,
  FacebookShareButton,
  PinterestShareButton,
  EmailShareButton,
} from "react-share";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";

const Posts = () => {
  try {
  const blogPosts = [
    {
      id: '1',
      title: "Post Title Here",
      titledescription: "Catchy Caption here...",
      timestamp: moment().toISOString(), // Current date and time
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Assumenda voluptates facilis quas inventore consequuntur asperiores 
      repellendus quasi quis fuga cupiditate, velit dolore placeat debitis 
      cum aperiam dolorum, voluptatem expedita ratione? Lorem ipsum dolor 
      sit amet, consectetur adipiscing elit. Assumenda voluptates facilis quas inventore consequuntur asperiores 
      repellendus quasi quis fuga cupiditate! Velit dolore placeat debitis... `,
      imageUrl: YogaSet,
      postURL: "/full-posts#1",
    },
  ];

  return (
    <div className='text-start' >
    {" "}
    {/*col start for all posts */}
    {blogPosts.map((post) => (
      <div key={post.id} className="w3-container-4 w3-white">
        <img
          src={post.imageUrl}
          alt="blog-post"
          style={{ width: "100%" }}
        />

        <div className="w3-container">
          <br></br>
          <h4>
             Title: {""} <i><b>{post.title}</b> </i>
          </h4>
   
          <p>
           Post Description: {""} {post.titledescription}
           <br />
            <span className="w3-opacity">
              Posted on:{" "}
              {moment(post.timestamp).format(
                "MMMM Do YYYY, h:mm:ss a"
              )}
            </span>
          </p>
       
        </div>

        {/* start entries container content container*/}
        <div className="w3-container">
          <p>{post.content}</p>
       
          {/* start entries container content container ROW*/}
       
          <MDBBtn color='dark' size="sm" className='px-3  btn-outline-light'>
             View Full Post
              </MDBBtn>
<br />
<br />
<div className="row d-flex w3-light-gray">{/* Add bg-black class here */}
  <br></br>
  <div className="col-12 text-center w3-padding-16">
    <TwitterShareButton 
    url={window.location.href} 
    title={post.title}
    className='m-1' 
    style={{ color: '#55acee' }}
    >
      <MDBIcon fab icon='twitter' className="w3-large" />
    </TwitterShareButton>

    <FacebookShareButton 
    url={window.location.href} 
    quote={post.title}
    className='m-2' 
    style={{ color: '#3b5998' }}
    >
      <MDBIcon fab icon='facebook-f' className="w3-large"/>
    </FacebookShareButton>

    <EmailShareButton 
    url={window.location.href} 
    quote={post.title}
    className='m-2' 
    style={{ color: 'lightGreen' }}
    >
       <MDBIcon fas icon="share" className="w3-large"/>
    </EmailShareButton>


    <PinterestShareButton 
    url={window.location.href} 
    quote={post.title}
    color='none' 
    className='m-1' 
    style={{ color: 'red' }}
    >
       <MDBIcon fab icon='pinterest' className="w3-large"/>
    </PinterestShareButton>
  </div>
</div>

          
          </div>
          <hr />
        {/* end entries container content container*/}
      </div>
    ))}
       
              {/*col end for posts iteration */}
           
    </div>
  );
} catch (error) {
  console.error("Error rendering Posts component:", error);
  return (
    <div>
      <p>Error rendering Posts component. Please try again later.</p>
    </div>
  );
}
};

export default Posts;

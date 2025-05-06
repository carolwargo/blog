//./components/Newsfeed.jsx
import React from "react";
import Header from "../Header/Header";
import UserNav from "../Nav/UserNav";
import GirlCamera from "../../assets/images/GirlCamera.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Newsfeed.css"; // Import your CSS file for styling

import {
  FaImage,
  FaVideo,
  FaArrowUp,
  FaHome as FaHomeIcon,
  FaThumbsUp,
  FaComment,
  FaUnderline,
  FaBold,
  FaItalic,
} from "react-icons/fa";

export default function Newsfeed() {
  return (
    <div className="newsfeed-scroll">

      {/* The Grid */}
      <Header />
      <UserNav />
      <div className="container">
        <hr className="mt-4 shadow" />
      </div>
      <div className=" my-4">
        <div className="w3-card w3-white w3-round w3-margin px-3 py-1">
          <div className="d-flex align-items-start my-3 ">
            <img
              src={GirlCamera}
              alt="Avatar 2"
              className="profile-img-small"
            />
            <div className="border rounded mt-2" style={{ width: "100%" }}>
              <textarea
                className="form-control w3-border w3-round"
                rows="2"
                placeholder="What's on your mind?"
                style={{ resize: "none", fontVariant: "primary" }}
              ></textarea>
            </div>
          </div>
          <div className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between align-items-md-center my-2">
            {/* Left: Upload buttons */}
            <div className="d-flex flex-wrap align-items-center ms-0 ms-md-5 mb-2 mb-md-0">
              <div
                className="toolbar-btn me-2"
                title="Upload Image"
                aria-label="Upload image"
              >
                <FaImage />
              </div>
              <div
                className="toolbar-btn me-2"
                title="Upload Video"
                aria-label="Upload video"
              >
                <FaVideo />
              </div>
              <span
                className="toolbar-btn-transparent me-2"
                title="Underline"
                aria-label="Underline"
              >
                <FaUnderline />
              </span>
              <div
                className="toolbar-btn-transparent me-2"
                title="Bold text"
                aria-label="Bold text"
              >
                <FaBold />
              </div>
              <div
                className="toolbar-btn-transparent me-2"
                title="Italicize"
                aria-label="Italicize"
              >
                <FaItalic />
              </div>
            </div>

            {/* Right: Post button */}
            <div className='align-items-center ms-0 ms-md-5 mb-2 mb-md-0">'>
              <div
                className="post-btn me-2"
                title="Italicize"
                aria-label="Italicize"
              >
                <FaArrowUp />
              </div>
            </div>
          </div>
        </div>

        {/**Posts start */}
        <div className="w3-card w3-white w3-round w3-margin">
          <div className="w3-margin">
            <br />
            <img
              src="https://i.pravatar.cc/150?img=2"
              alt="Avatar 2"
              className="profile-img-small"
            />
            <span style={{ fontSize: "1.25rem" }}>John Doe</span>
            <span className="w3-right w3-opacity">1 min</span>
            <br />
            <hr className="w3-clear" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
              <div className="w3-half">
                <img
                  src="https://picsum.photos/id/1015/600/400"
                  alt="Northern Lights"
                  style={{ width: "100%" }}
                  className="w3-margin-bottom"
                />
              </div>
              <div className="w3-half">
                <img
                  src="https://picsum.photos/id/1016/600/400"
                  style={{ width: "100%" }}
                  alt="Nature"
                  className="w3-margin-bottom"
                />
              </div>
            </div>
            <button
              type="button"
              className="w3-button w3-theme-d1 w3-margin-bottom"
            >
              <FaThumbsUp /> Like
            </button>
            <button
              type="button"
              className="w3-button w3-theme-d2 w3-margin-bottom"
            >
              <FaComment /> Comment
            </button>
          </div>
        </div>

        <div className="w3-card w3-white w3-round w3-margin">
        <div className="w3-margin">
            <br />
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Avatar 2"
               className="profile-img-small"
            />
            <span style={{ fontSize: "1.25rem" }}>John Doe</span>
            <span className="w3-right w3-opacity">1 min</span>
            <br />
            <hr className="w3-clear" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button
              type="button"
              className="w3-button w3-theme-d1 w3-margin-bottom"
            >
              <FaThumbsUp /> Like
            </button>
            <button
              type="button"
              className="w3-button w3-theme-d2 w3-margin-bottom"
            >
              <FaComment /> Comment
            </button>
          </div>
        </div>

        <div className="w3-card w3-white w3-round w3-margin">
          <div className="w3-margin">
            <br />
            <img
              src="https://i.pravatar.cc/150?img=6"
              alt="Avatar 6"
              className="profile-img-small"
            />
                  <span style={{ fontSize: "1.25rem" }}>John Doe</span>
            <span className="w3-right w3-opacity">32 min</span>
            <br />
            <hr className="w3-clear" />
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img
              src="https://picsum.photos/id/1016/600/400"
              alt="Nature"
              style={{ width: "100%" }}
              className="w3-margin-bottom"
            />
     
            <button
              type="button"
              className="w3-button w3-theme-d1 w3-margin-bottom"
            >
              <FaThumbsUp /> Like
            </button>
            <button
              type="button"
              className="w3-button w3-theme-d2 w3-margin-bottom"
            >
              <FaComment /> Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

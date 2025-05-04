import React from 'react';
import Header from './Header/Header'; 
import GirlCamera from '../assets/images/GirlCamera.png';   
import 'bootstrap/dist/css/bootstrap.min.css';

//import Explore from './Explore/Explore';


import {

  FaPen, // Replace FaPencil with FaPen
  FaHome as FaHomeIcon,
  FaThumbsUp,
  FaComment,
} from 'react-icons/fa';


export default function Newsfeed() {


  return (
    
    <div className="w3-theme-l5">
   
       <div className="w3-container">
          {/* The Grid */}
          <Header/>



          <div className="w3-card w3-white w3-round w3-margin px-3 py-2">
      <div className="d-flex align-items-start my-3 border-bottom">
      <img
                  src={GirlCamera }
                  alt="Avatar 2" 
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: '60px' }}
                />
        <textarea
          className="form-control w3-border w3-round"
          rows="3"
          placeholder="What's on your mind?"
          style={{ resize: 'none' }}
        ></textarea>
      </div>
      
      <div className="w3-right-align mb-2">
        <button className=' btn btn-dark'>
        <FaPen className="me-2" />
        Post
        </button>
      </div>
    </div>

              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img
                  src="https://i.pravatar.cc/150?img=2" 
                  alt="Avatar 2" 
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: '60px' }}
                />
                <span className="w3-right w3-opacity">1 min</span>
                <h4>John Doe</h4>
                <br />
                <hr className="w3-clear" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </p>
                <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
                  <div className="w3-half">
                    <img src="https://picsum.photos/id/1015/600/400" alt="Northern Lights" style={{ width: '100%' }} className="w3-margin-bottom" />
                  </div>
                  <div className="w3-half">
                    <img src="https://picsum.photos/id/1016/600/400" style={{ width: '100%' }} alt="Nature" className="w3-margin-bottom" />
                  nhiệm</div>
                </div>
                <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
                  <FaThumbsUp /> Like
                </button>
                <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
                  <FaComment /> Comment
                </button>
              </div>

              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img
                 src="https://i.pravatar.cc/150?img=3" 
                 alt="Avatar 3"
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: '60px' }}
                />
                <span className="w3-right w3-opacity">16 min</span>
                <h4>Jane Doe</h4>
                <br />
                <hr className="w3-clear" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </p>
                <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
                  <FaThumbsUp /> Like
                </button>
                <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
                  <FaComment /> Comment
                </button>
              </div>

              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img
              src="https://i.pravatar.cc/150?img=6" 
              alt="Avatar 6"
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: '60px' }}
                />
                <span className="w3-right w3-opacity">32 min</span>
                <h4>Angie Jane</h4>
                <br />
                <hr className="w3-clear" />
                <p>Have you seen this?</p>
                <img src="https://picsum.photos/id/1016/600/400" alt="Nature" style={{ width: '100%' }} className="w3-margin-bottom" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </p>
                <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
                  <FaThumbsUp /> Like
                </button>
                <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
                  <FaComment /> Comment
                </button>
              </div>
            </div>
          </div>
  );
}


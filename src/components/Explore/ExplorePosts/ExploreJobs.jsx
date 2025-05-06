import React from "react";
import "./ExplorePosts.css";
import { Accordion } from "react-bootstrap";  
import { Link } from "react-router-dom";

const ExploreJobs = () => {
  return (
    <div className="border-top mt-3">
    <div className="card bg-white" style={{borderRadius:'0px'}}>
    <div className="card-body p-3">
    <div className="container p-4">
                         <h5 className="fw-bolder mt-2 mb-0 d-flex justify-content-between align-items-center">
              <span 
              style={{  color:' #001c32', textShadow:' 0px 1px 2px rgb(0, 0, 0)' }}  
             >EXPLORE: Jobs, Gigs & Career opportunities</span>
              <span
                className="w3-tag py-1 px-3 rounded-4"
                style={{ fontSize: "12px", backgroundColor:' #001c32', color:' #78c5fe' }}
              >
                Beta
              </span>
            </h5>
                        <p className="py-0 small text-muted mb-4">find a position or fill a need...</p>

                        {/**start topic 1 */}
                        <div className="explore-topics">
                          <p className="explore-topics-entry">
                            <span className="explore-topics-title">
                              AI and beauty technology
                            </span>
                            <br />
                            <span className="explore-topics-meta">
                              {" "}
                              17 hours ago · 5 min read · 43K posts
                            </span>
                          </p>
                        </div>
                        {/**start topic 2 */}
                        <div className="explore-topics">
                          <p className="explore-topics-entry">
                            <span className="explore-topics-title">
                              Botox & Fillers
                            </span>
                            <br />
                            <span className="explore-topics-meta">
                              {" "}
                              15 hours ago · 8 min read · 3K posts
                            </span>
                          </p>
                        </div>
                        {/**start topic 3 */}
                        <div className="explore-topics">
                          <p className="explore-topics-entry">
                            <span className="explore-topics-title">
                              XY: Men's Product Demand
                            </span>
                            <br />
                            <span className="explore-topics-meta">
                              {" "}
                              2 hours ago · 1 min read · 3K posts
                            </span>
                          </p>
                        </div>
                        {/**start topic 4 */}
                        <div className="explore-topics">
                          <p className="explore-topics-entry">
                            <span className="explore-topics-title">
                              Smarter use of products
                            </span>
                            <br />
                            <span className="explore-topics-meta">
                              {" "}
                              7 hours ago · 15 min read · 3K posts
                            </span>
                          </p>
                        </div>

                          {/**Start Accordian Feature: See More */}
                                        <Accordion>
                                          <Accordion.Item eventKey="0">
                                            <Accordion.Header> 
                                            <span style={{  color:' #001c32', textShadow:' 0px 1px 2px rgb(0, 0, 0)' }}>See More</span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                              <Link
                                                to={"/"}
                                                className="text-decoration-none text-dark"
                                              >
                                                {/**start business services 5 */}
                                                <div className="explore-business">
                                                  <p className="explore-business-entry">
                                                    <span className="explore-business-title">
                                                    E-commerce Brand Manager
                                                    </span>
                                                    <br />
                                                    <span className="explore-business-meta">
                                                      {" "}
                                                      12 hours ago · 4 min read · 3K posts
                                                    </span>
                                                  </p>
                                                </div>
                                              </Link>
                                              <Link
                                                to={"/"}
                                                className="text-decoration-none text-dark"
                                              >
                                                {/**start business services 6 */}
                                                <div className="explore-business">
                                                  <p className="explore-business-entry">
                                                    <span className="explore-business-title">
                                                      {" "}
                                                      Skincare Product Development Specialist
                                                    </span>
                                                    <br />
                                                    <span className="explore-business-meta">
                                                      {" "}
                                                      8 hours ago · 19 min read · 3K posts
                                                    </span>
                                                  </p>
                                                </div>
                                              </Link>
                                              
                                              <Link
                                                to={"/"}
                                                className="text-decoration-none text-dark"
                                              >
                                                {/**start business services 6 */}
                                                <div className="">
                                                <button className=" btn btn-outline-dark rounded-5 w-100 mt-2"
                      style={{boxShadow:' 0px 0px 5px #001c32'}}>
                        See All
                      </button>
                                                </div>
                                              </Link>
                                            </Accordion.Body>
                                          </Accordion.Item>
                                        </Accordion>
                                        {/**End Accordian Feature: See More */}  </div>
</div>
</div>
</div>

  );
};

export default ExploreJobs;

import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FeedPost from "./feed/FeedPost";
import FeedHeader from "./feed/FeedHeader";
import "./feed/feed.css";
import "./feed/feed-mobile.css";
import Profile from "./feed/Profile";
function Feed() {
  return (
    <main>
      <div className="container">
        <div className="row g-4 ">
          <div className="  col-lg-8">
            <div class="card feed-header ">
              <>
                <img
                  src="https://images.unsplash.com/photo-1542370285-b8eb8317691c?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                  class="card-img-top mh-100 feed-bg-img-mh-100"
                  alt="..."
                />
                <div class="card-body pb-0">
                  <div class="d-sm-flex flex-wrap justify-content-center">
                    <div class="p-2 feed-pp-container">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTODhj3Ap6bYRSRCMNKix7E9xY2dvdHyZPQ&amp;s"
                        class=" border border-white border-2 rounded-circle feed-icon-rounded-circle "
                        alt="..."
                      />
                    </div>
                    <div class="p-2">
                      <h5 class="card-title fw-bolder  mb-0">
                        Rabiul Sk
                        <i class="bi bi-patch-check-fill text-success small ms-1"></i>
                      </h5>

                      <p class=" opacity-50 ">250 connections</p>
                    </div>

                    <div class="p-2 flex-grow-1 flex-align-right-top d-flex">
                      {/* <div class="d-flex"> */}
                      <button
                        type="button"
                        class="btn btn-danger edit-profile-btn  edit-profile-btn:hover"
                      >
                        <i class="bi bi-pen-fill me-2"></i>
                        Edit Profile
                      </button>

                      <div class="btn-group ms-2">
                        <button
                          type="button"
                          class="btn btn-light dropdown-toggle"
                          data-bs-toggle="dropdown"
                          data-bs-display="static"
                          aria-expanded="false"
                        >
                          <i class="bi bi-three-dots"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-lg-end">
                          <li>
                            <a class="dropdown-item" href="#">
                              {" "}
                              <i class="bi bi-bookmark fa-fw pe-2"></i>Share
                              profile in a message
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              {" "}
                              <i class="bi bi-file-pdf pe-2"></i>
                              Save your profile to PDF
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              {" "}
                              <i class="bi bi-lock pe-2"></i>
                              Lock profile
                            </a>
                          </li>

                          <li>
                            <hr class="dropdown-divider" />
                          </li>

                          <li>
                            <a class="dropdown-item" href="#">
                              <i class="bi bi-gear pe-2"></i>
                              Profile settings
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>

                  <div class="d-flex flex-wrap  col-lg-8">
                    <div class="p-1 flex-shrink-0">
                      <a class="dropdown-item" href="#">
                        {" "}
                        <i class="bi bi-briefcase me-1"></i>Lead Developer
                      </a>
                    </div>

                    <div class="p-1 flex-shrink-0">
                      <a class="dropdown-item" href="#">
                        {" "}
                        <i class="bi bi-geo-alt me-1"></i> New Hampshire
                      </a>
                    </div>
                    <div class="p-1 flex-shrink-0">
                      <a class="dropdown-item" href="#">
                        {" "}
                        <i class="bi bi-calendar-event ms-1"></i> Joined on Nov
                        26, 2019
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card-footer bg-transparent border-card pb-0 pt-2 mt-3">
                  <ul class="nav nav-underline feed-nav-underline">
                    <li class="nav-item">
                      <a
                        class="nav-link px-3 fw-semibold active"
                        id="post-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#post"
                        type="button"
                        role="tab"
                        aria-controls="post"
                        aria-selected="true"
                      >
                        Post
                      </a>
                    </li>
                    {/* Post
About
Connections230
Media
Videos
Events
Activity 

   Connections
                        <span class="badge bg-success bg-opacity-10 text-success  ms-1">
                          {" "}
                          230
                        </span>*/}
                    <li class="nav-item">
                      <a
                        class="nav-link px-3 fw-semibold " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link px-3 fw-semibold " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                        Connections
                        <span class="badge bg-success bg-opacity-10 text-success  ms-1">
                          {" "}
                          230
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            </div>

            {/* feed-body start here  */}
            <div className="feed-body">
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="post"
                  role="tabpanel"
                  aria-labelledby="post-tab"
                >
                  <FeedPost />
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <Profile />
                </div>
                <div
                  class="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <h1></h1>
                </div>
              </div>
            </div>
          </div>
          <div className="  col-lg-4">cknwe d</div>
        </div>
      </div>
    </main>
  );
}

export default Feed;

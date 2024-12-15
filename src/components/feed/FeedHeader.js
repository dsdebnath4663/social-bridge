
import React from 'react';


function FeedHeader() {
  return (
    // {/* feed-header start here  */ }
    < div class="card feed-header" >
      <><img
        src="https://images.unsplash.com/photo-1542370285-b8eb8317691c?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
        class="card-img-top mh-100 feed-bg-img-mh-100"
        alt="..." /><div class="card-body">
          <div class="d-flex">
            <div class="p-2 feed-pp-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTODhj3Ap6bYRSRCMNKix7E9xY2dvdHyZPQ&amp;s"
                class=" border border-white border-2 rounded-circle feed-icon-rounded-circle "
                alt="..." />
            </div>
            <div class="p-2">
              <h5 class="card-title fw-bolder  mb-0">
                Rabiul Sk
                <i class="bi bi-patch-check-fill text-success small ms-1"></i>
              </h5>

              <p class=" opacity-50 ">250 connections</p>
            </div>

            <div class="p-2 flex-grow-1 flex-align-right-top">
              <div class="d-flex">
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
              </div>
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
                <i class="bi bi-calendar-event ms-1"></i> Joined on Nov 26,
                2019
              </a>
            </div>
          </div>
        </div><div class="card-footer bg-transparent border-light">
          <ul class="nav nav-underline">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Posts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div></>
    </div >
    // {/* feed-header end here  */ } 
  );
}

export default FeedHeader;

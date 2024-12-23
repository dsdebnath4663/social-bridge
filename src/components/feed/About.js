
import React from 'react';
import "./feed.css"
import "./feed.css"

const About = () => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Profile Info</h5>
      </div>
      <div class="card-body mt-15">
        <div class="rounded border px-3 py-2 mb-3">
          <h5 class="card-title">Overview</h5>
          <p class="card-text">
            He moonlights difficult engrossed it, sportsmen. Interested has
            all Devonshire difficulty gay assistance joy. Handsome met
            debating sir dwelling age material. As style lived he worse dried.
            Offered related so visitors we private removed. Moderate do
            subjects to distance.
          </p>
        </div>
        <div class=" card-body row g-4    opacity-75">
          <div class="col-sm-6 ">
            <div class="d-flex rounded border py-1">
              <div class="p-2">
                <a class="dropdown-item" href="#">
                  <i class="bi bi-calendar-check  pe-1 "></i>Born:
                  <span class="fw-bolder "> October 20, 1990</span>
                </a>
              </div>
              <div class="flex-grow-1 flex-align-right-top ">
                <div class="dropdown">
                  <button
                    class="btn btn-white dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-three-dots"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-lg-end shadow-lg px-2 py-3">
                    <li>
                      <a class="dropdown-item fw-semibold " href="#">
                        <i class="bi bi-calendar-check  me-1"></i>
                        <span> Edit</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-wrap row">
          <div class="col-md-4">
            <div class="d-flex">
              <div class="">
                <img
                  src="https://social.webestica.com/assets/images/logo/08.svg"
                  class="rounded-circle feed-icon-rounded-circle-two "
                  alt="..."
                />
              </div>
              <div class="">
                <p class="fw-bolder  mb-0">Oracle</p>
                <small>
                  7,546,224 followers

                </small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

}


export default About;

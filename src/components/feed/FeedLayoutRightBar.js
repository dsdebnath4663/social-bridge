import React from "react";
import "./feed.css";

function FeedLayoutRightBar() {
  return (
    <div>
      <div class="card">
        <div class="card-body ">
          <h5 class="card-title" fw-bolder>
            About
          </h5>
          <div className="opacity-75">
            <p class="card-text">
              He moonlights difficult engrossed it, sportsmen. Interested has
              all Devonshire difficulty gay assistance joy.
            </p>
            <a class="dropdown-item" href="#">
              <i class="bi bi-calendar-check  pe-1 "></i>Born:
              <span className="fw-bolder "> October 20, 1990</span>
            </a>
            <a class="dropdown-item" href="#">
              <i class="bi bi-heart pe-1"></i>Status:
              <span className="fw-bolder "> Single</span>
            </a>
            <a class="dropdown-item" href="#">
              <i class="bi bi-envelope pe-1"></i>Email:
              <span className="fw-bolder"> example@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div class="card my-4">
        <div class="card-body">
          <div class="d-flex">
            <h5 class="card-title">Experience</h5>
            <div class=" flex-grow-1 flex-align-right-top d-flex">
              <button class="btn btn-outline-primary border border-0 btn-light " type="button"><i class="bi bi-plus-lg "></i></button>
            </div>
          </div>

          <div class="d-flex">
            <div class="flex-fill">
              <img
                src="https://social.webestica.com/assets/images/logo/08.svg"
                class="rounded-circle feed-icon-rounded-circle p-2"
                alt="..."
              />
            </div>
            <div class=" flex-fill">
              <p className="fw-bolder  mb-0">Apple Computer, Inc.</p>
              <p>
                May 2015 – Present Employment Duration 8 mos
                <button
                  type="button"
                  class="btn btn-outline-primary border border-1 btn-xsm ms-1"
                >
                  edit
                </button>
              </p>
            </div>
          </div>

        </div>
      </div>

      <div class="card my-4">
        <div class="card-body">
          <div class="d-flex">
            <h5 class="card-title">Photos</h5>
            <div class=" flex-grow-1 flex-align-right-top d-flex mb-2"><button class="btn btn-outline-primary border border-0 btn-light" type="button">View More</button>
            </div>



          </div>
          <div
            class="row justify-content-center gx-0"
          >
            <div class="col-6 justify-content-center  text-center  ">
              <img src="https://editaphotography.in/blog/wp-content/uploads/2018/01/best_children_photographer_Pune-2000x1200.jpg" class="img-thumbnail border border-0 px-1 py-1 img-avatar" alt="..." />

            </div>
            <div class="col-6 justify-content-center  text-center  ">
              <img src="https://editaphotography.in/blog/wp-content/uploads/2018/01/best_children_photographer_Pune-2000x1200.jpg" class="img-thumbnail border border-0 px-1 py-1 img-avatar" alt="..." />
            </div>

            <div
              class="col-4 justify-content-center  text-center ">
              <img src="https://editaphotography.in/blog/wp-content/uploads/2018/01/best_children_photographer_Pune-2000x1200.jpg" class="img-thumbnail border border-0 px-1 py-1 img-avatar-sm" alt="..." />
            </div>
            <div
              class="col-4 justify-content-center  text-center ">

              <img src="https://editaphotography.in/blog/wp-content/uploads/2018/01/best_children_photographer_Pune-2000x1200.jpg" class="img-thumbnail border border-0 px-1 py-1 img-avatar-sm" alt="..." />
            </div>
            <div
              class="col-4 justify-content-center  text-center ">

              <img src="https://editaphotography.in/blog/wp-content/uploads/2018/01/best_children_photographer_Pune-2000x1200.jpg" class="img-thumbnail border border-0 px-1 py-1 img-avatar-sm" alt="..." />
            </div>


          </div>
        </div>
      </div>

    </div>
  );
}

export default FeedLayoutRightBar;

import React from "react";
import "./feed.css";
import ImageGalleryWithModal from "./ImageGalleryWithModal";

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
              <button
                class="btn btn-outline-primary border border-0 btn-light "
                type="button"
              >
                <i class="bi bi-plus-lg "></i>
              </button>
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
            <div class=" flex-grow-1 flex-align-right-top d-flex mb-2">
              <button
                class="btn btn-outline-primary border border-0 btn-light"
                type="button"
              >
                View More
              </button>
            </div>
          </div>
          <ImageGalleryWithModal />
          {/* <div
            class="row justify-content-center gx-0"
          >
            <div class="col-6 justify-content-center  text-center  " data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="https://editaphotography.in/blog/wp-content/uploads/2018/01/best_children_photographer_Pune-2000x1200.jpg" class="img-thumbnail border border-0 px-1 py-1 img-avatar" alt="..." />

            </div>
            <div class="col-6 justify-content-center  text-center  " data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="https://img.freepik.com/free-photo/man-with-his-arms-crossed-white-background_1368-4244.jpg?ga=GA1.1.154970172.1733322318&semt=ais_hybrid" class="img-thumbnail border border-0 px-1 py-1 img-avatar" alt="..." />
            </div>

            <div
              class="col-4 justify-content-center  text-center " data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="https://img.freepik.com/premium-photo/man-cheerful-studio-portrait-concept_53876-48572.jpg?ga=GA1.1.154970172.1733322318&semt=ais_hybrid" class="img-thumbnail border border-0 px-1 py-1 img-avatar-sm" alt="..." />
            </div>
            <div
              class="col-4 justify-content-center  text-center " data-bs-toggle="modal" data-bs-target="#exampleModal">

              <img src="https://img.freepik.com/premium-photo/smiling-woman-with-tablet-computer_78203-628.jpg?ga=GA1.1.154970172.1733322318&semt=ais_hybrid" class="img-thumbnail border border-0 px-1 py-1 img-avatar-sm" alt="..." />
            </div>
            <div
              class="col-4 justify-content-center  text-center " data-bs-toggle="modal" data-bs-target="#exampleModal">

              <img src="https://img.freepik.com/free-photo/businesswoman-signing-document-contract-sale-new-house_23-2148182974.jpg?ga=GA1.1.154970172.1733322318&semt=ais_hybrid" class="img-thumbnail border border-0 px-1 py-1 img-avatar-sm" alt="..." />
            </div>


          </div> */}
          {/* <!-- Modal start --> */}
          {/* <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header-removed">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Hello
                  <img src="https://editaphotography.in/blog/wp-content/uploads/2018/01/best_children_photographer_Pune-2000x1200.jpg" class="img-thumbnail " alt="..." />

                </div>

              </div>
            </div>
          </div> */}
          {/* <!-- Modal End--> */}
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="d-flex">
            <h5 class="card-title">Friends
              <span class="badge bg-danger bg-opacity-25 text-danger ms-1">230</span>
            </h5>
            <div class=" flex-grow-1 flex-align-right-top d-flex mb-2">
              <button
                class="btn btn-outline-primary border border-0 btn-light"
                type="button"
              >
                See all friends
              </button>
            </div>
          </div>
        </div>

        <div
          class="row justify-content-center align-items-center g-2"
        >
          <div class="col-6 p-4">
            <div class="card" >
              <div class="d-flex justify-content-center mt-2">
                <img src="https://social.webestica.com/assets/images/avatar/02.jpg"
                  class="border border-primary border-2 rounded-circle feed-icon-rounded-circle
               " alt="..." />
              </div>
              <div class="text-center"><p class="fw-bolder  mb-0">Kajal Aggarwal </p>
                <small class=" opacity-50 font">16 mutual connections</small>
              </div>

              <div class="d-flex justify-content-center">
                <div class="p-1 flex-shrink-1" >

                  <button class="btn btn-primary border border-0  " type="button"
                    data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
                    <i class="bi bi-person-fill"></i></button>
                </div>
                <div class="p-1 flex-shrink-1">
                  <button type="button" class="btn btn-danger">
                    <i class="bi bi-chat-left-text"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card" >
              <div class="d-flex justify-content-center mt-2">
                <img src="https://www.bollywoodshaadis.com/img/article-2016925110154136941000.jpg"
                  class="border border-primary border-2 rounded-circle feed-icon-rounded-circle
               " alt="..." />
              </div>
              <div class="text-center"><p class="fw-bolder  mb-0">Vidyut Jammwal</p>
                <small class=" opacity-50 font">16 mutual connections</small>
              </div>

              <div class="d-flex justify-content-center">
                <div class="p-1 flex-shrink-1" >

                  <button class="btn btn-primary border border-0  " type="button"
                    data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
                    <i class="bi bi-person-fill"></i></button>
                </div>
                <div class="p-1 flex-shrink-1">
                  <button type="button" class="btn btn-danger">
                    <i class="bi bi-chat-left-text"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6"> <div class="card" >
            <div class="d-flex justify-content-center mt-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Allu_Arjun_2024.jpg/640px-Allu_Arjun_2024.jpg"
                class="border border-primary border-2 rounded-circle feed-icon-rounded-circle
               " alt="..." />
            </div>
            <div class="text-center"><p class="fw-bolder  mb-0"> Allu Arjun </p>
              <small class=" opacity-50 font">16 mutual connections</small>
            </div>

            <div class="d-flex justify-content-center">
              <div class="p-1 flex-shrink-1" >

                <button class="btn btn-primary border border-0  " type="button"
                  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
                  <i class="bi bi-person-fill"></i></button>
              </div>
              <div class="p-1 flex-shrink-1">
                <button type="button" class="btn btn-danger">
                  <i class="bi bi-chat-left-text"></i></button>
              </div>
            </div>
          </div></div>
          <div class="col-6"> <div class="card" >
            <div class="d-flex justify-content-center mt-2">
              <img src="https://www.deccanchronicle.com/h-upload/2024/09/29/1846459-kajalaggarwallll.jpg"
                class="border border-primary border-2 rounded-circle feed-icon-rounded-circle
               " alt="..." />
            </div>
            <div class="text-center"><p class="fw-bolder  mb-0">Kajal Aggarwal </p>
              <small class=" opacity-50 font">16 mutual connections</small>
            </div>

            <div class="d-flex justify-content-center">
              <div class="p-1 flex-shrink-1" >

                <button class="btn btn-primary border border-0  no-focus" type="button"
                  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
                  <i class="bi bi-person-fill"></i></button>
              </div>
              <div class="p-1 flex-shrink-1">
                <button type="button" class="btn btn-danger">
                  <i class="bi bi-chat-left-text"></i></button>
              </div>
            </div>
          </div></div>
        </div>


      </div>
    </div>
  );
}

export default FeedLayoutRightBar;

import CommentSection from "./CommentSection";
import PhotoPost from "./PhotoPost";

function MainModule() {
  const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300', 'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300', 'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300', 'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300', 'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300', 'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300', 'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300', 'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300', 'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300', 'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300', 'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    // Add more image URLs
  ];

  return (
    <main>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 left-bar ">
            <button
              className="btn btn-primary  d-lg-none d-xl-block d-xxl-none d-md-none d-lg-block"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <i className="bi bi-sliders"></i>
            </button>
            <span className="fw-bold   d-lg-none d-xl-block d-xxl-none d-md-none d-lg-block">
              My Profile
            </span>

            <div
              className="offcanvas offcanvas-start "
              data-bs-scroll="true"
              tabindex="-1"
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div className="offcanvas-header d-lg-none d-xl-block d-xxl-none d-md-none d-lg-block ">
                <h5
                  className="offcanvas-title"
                  id="offcanvasWithBothOptionsLabel"
                ></h5>
                <button
                  type="button "
                  className="btn-close "
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="card overflow-hidden  border-light-subtle">
                  <div className="card-img-top mh-100   " alt="..." />

                  <div className="card-body">
                    <div className="text-center">
                      <a
                        className="btn bg-light profile-pic p-0 "
                        href="#"
                        role="button"
                      >
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&amp;s"
                          className="rounded border border-white border-3"
                        />
                      </a>
                      <p className="fw-bolder fs-5  mt-3 mb-0">Sam Lanson</p>
                      <small className=" opacity-50 font">
                        Web Developer at Webestica
                      </small>

                      <p className="opacity-75 mt-3 mb-0">
                        I'd love to change the world, but they won’t give me the
                        source code.
                      </p>
                    </div>
                  </div>

                  <div className="     hstack  gap-2 gap-xl-3 justify-content-center mb-3 text-center  mt-minus-3">
                    <div>
                      <p className="fw-bolder   mb-0">256</p>
                      <small>Post</small>
                    </div>
                    <div className="vr"></div>
                    <div>
                      <p className="fw-bolder  mb-0">2.5K </p>
                      <small>Followers</small>
                    </div>
                    <div className="vr"></div>
                    <div>
                      <p className="fw-bolder  mb-0">256</p>
                      <small>Following</small>
                    </div>
                  </div>

                  <ul className="list-group list-group-flush border-top">
                    <li className="list-group-item border-light-subtle">
                      <a>
                        <i className="me-2 bi bi-house-heart"></i>
                        <span className="fw-bolder  mb-0"> Feed</span>
                      </a>
                    </li>
                    <li className="list-group-item border-light-subtle">
                      <a>
                        <i className=" me-2  bi bi-person-arms-up"></i>
                        <span className="fw-bolder  mb-0"> Connections</span>
                      </a>
                    </li>

                    <li className="list-group-item border-light-subtle">
                      <a>
                        <i className="me-2 bi bi-globe-americas"></i>
                        <span className="fw-bolder  mb-0"> Latest News </span>
                      </a>
                    </li>

                    <li className="list-group-item border-light-subtle">
                      <a>
                        <i className="me-2 bi bi-calendar2-event"></i>
                        <span className="fw-bolder  mb-0"> Event </span>
                      </a>
                    </li>

                    <li className="list-group-item border-light-subtle">
                      <a>
                        <i className="me-2  bi bi-chat-quote"></i>
                        <span className="fw-bolder  mb-0"> Groups</span>
                      </a>
                    </li>

                    <li className="list-group-item border-light-subtle">
                      <a>
                        <i className="me-2 bi bi-app-indicator"></i>
                        <span className="fw-bolder  mb-0"> Notifiction</span>
                      </a>
                    </li>
                    <li className="list-group-item border-light-subtle">
                      <a>
                        <i className="me-2 bi bi-gear"></i>
                        <span className="fw-bolder  mb-0"> Settings</span>
                      </a>
                    </li>
                  </ul>
                  <div className="card-body text-center  py-2 border-top">
                    <a href="#" className="card-link text-decoration-none">
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-6  d-flex flex-column  gap-4">
            <div className="card border-light-subtle ">
              <div className="card-body">
                <div className="d-flex flex-row mb-3">
                  <div className="p-2 ">
                    <a
                      className="  btn bg-light   icon-md p-0 "
                      href="#"
                      role="button"
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&s"
                        className="rounded-2"
                      ></img>
                    </a>
                  </div>
                  <div className="p-2 flex-fill">
                    <div className="form-floating ">
                      <textarea
                        className="form-control border border-light-subtle"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                      ></textarea>
                      <label for="floatingTextarea ">
                        Share your thoughts...
                      </label>
                    </div>
                  </div>
                </div>

                <ul className="d-flex flex-wrap ps-0">
                  <li className="nav-item dropdown     list-style-none p-2">
                    <a
                      className="nav-link bg-light  text-decoration-none py-1 px-2 rounded"
                      href="#"
                      role="button"
                    >
                      <img
                        src="   https://cdn-icons-png.flaticon.com/512/1375/1375106.png "
                        width="25"
                        height="25"
                        alt=""
                        title=""
                        className="img-small"
                      ></img>
                      <span className="ms-2">Photo</span>
                    </a>
                  </li>

                  <li className="nav-item dropdown     list-style-none p-2">
                    <a
                      className="nav-link bg-light  text-decoration-none py-1 px-2 rounded"
                      href="#"
                      role="button"
                    >
                      <img
                        src="    https://cdn-icons-png.flaticon.com/512/2699/2699194.png  "
                        width="25"
                        height="25"
                        alt=""
                        title=""
                        className="img-small"
                      ></img>
                      <span className="ms-2">Video</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown     list-style-none p-2 ">
                    <a
                      className="nav-link bg-light  text-decoration-none py-1 px-2 rounded"
                      href="#"
                      role="button"
                    >
                      <img
                        src="   https://cdn-icons-png.flaticon.com/512/1968/1968779.png "
                        width="25"
                        height="25"
                        alt=""
                        title=""
                        className="img-small"
                      ></img>
                      <span className="ms-2">Event</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown   list-style-none p-2 ">
                    <a
                      className="nav-link bg-light  text-decoration-none py-1 px-2 rounded"
                      href="#"
                      role="button"
                    >
                      <img
                        src="   https://cdn-icons-png.flaticon.com/512/1375/1375106.png "
                        width="25"
                        height="25"
                        alt=""
                        title=""
                        className="img-small"
                      ></img>
                      <span className="ms-2">Feeling /Activity</span>
                    </a>
                  </li>

                  <li className="nav-item dropdown ms-lg-auto  list-style-none p-2">
                    <a
                      className="nav-link bg-light  text-decoration-none py-1 px-2 rounded"
                      href="#"
                      role="button"
                    >
                      <i className="bi bi-three-dots"></i>
                      {/* <img src="   https://cdn-icons-png.flaticon.com/512/1375/1375106.png " width="25" height="25" alt="" title="" className="img-small"></img> */}
                    </a>
                  </li>
                </ul>


              </div>
            </div>
            <div class="card border-light-subtle">
              <div class="card-body ">
                <div class="d-flex flex-row mb-3">
                  <div class=" position-relative">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTODhj3Ap6bYRSRCMNKix7E9xY2dvdHyZPQ&s"
                      class=" border border-primary border-2 rounded-circle icon-rounded-circle icon-md"
                      alt="..."
                    />
                  </div>
                  <div class="p-2">

                    <div class="ms-2">
                      <div class="d-flex flex-row ">
                        <div class="">
                          <p class="fw-bolder  mb-0">Rabiul Sk </p>
                        </div>
                        <div class="ms-2">
                          <li class="nav-item opacity-50 ">2hr</li>
                        </div>
                      </div>

                      <small class=" opacity-50 font">
                        Web Developer at Webestica
                      </small>
                    </div>
                  </div>
                </div>

                <p class="opacity-75 mt-3 mx-auto lh-1.5">
                  I'm thrilled to share that I've completed a graduate
                  certificate course in project management with the president's
                  honor roll.
                </p>

                {/* Post image  */}
                <img
                  src="https://freerangestock.com/sample/119866/business-meeting--conference-room--people-discussing-business-.jpg  mt-"
                  class="img-fluid rounded my-2"
                  alt="..."
                />
                {/* like comment share  */}
                <ul class="d-flex flex-wrap ps-0">
                  <li class="nav-item dropdown     list-style-none p-2 ">
                    <a
                      class=" text-decoration-none py-1 px-2 rounded"
                      href="#"
                      role="button"
                    >
                      <i class="bi bi-hand-thumbs-up-fill"></i>

                      <span class="ms-2 ">Liked (57)</span>
                    </a>
                  </li>
                  <li class="nav-item dropdown   list-style-none p-2 ">
                    <a
                      class="nav-link bg-light  text-decoration-none opacity-75 rounded"
                      href="#"
                      role="button"
                    >
                      <i class="bi bi-chat-fill"></i>
                      <span class="ms-2">Comments (12)</span>
                    </a>
                  </li>

                  <li class="  nav-item dropdown ms-lg-auto  list-style-none p-2">
                    <a
                      class="nav-link bg-light  text-decoration-none opacity-75 rounded"
                      href="#"
                      role="button"
                    >
                      <i class="bi bi-reply  flip-horizontal"></i>
                      <span class="ms-2  ">Share (3)</span>
                    </a>
                  </li>
                </ul>
                {/* Add a comment Section start */}
                <div class="d-flex flex-row ">
                  <div class="p-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTODhj3Ap6bYRSRCMNKix7E9xY2dvdHyZPQ&s"
                      class=" rounded-circle  icon-md"
                      alt="..."
                    />
                  </div>

                  <div class="p-2 flex-fill">
                    <div class="form-floating  position-relative">
                      <textarea
                        data-autoresize=""
                        class="form-control pe-5 bg-light h-auto no-resize py-2 custom-textarea"
                        rows="1"
                        placeholder="Add a comment...">
                      </textarea>
                      <button type="button" class="btn 
                       position-absolute top-50 end-0 translate-middle-y ">
                        <i class="bi bi-send-fill"></i>
                      </button>
                    </div>
                  </div>


                </div>
                {/* Add a comment Section end */}


                <CommentSection />

                <PhotoPost images={images} />

              </div>
            </div>
          </div>
          <div className="col-lg-3 d-none d-lg-block">

            <div class="card" >
              <div class="card-body">
                <h5 class="card-title">
                  <p class="fw-bolder fs-5  ">Who to follow
                  </p>
                </h5>

                <div class="d-flex">
                  <div class="p-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTODhj3Ap6bYRSRCMNKix7E9xY2dvdHyZPQ&amp;s" class=" rounded-circle  icon-md" alt="..." />
                  </div>
                  <div class="py-2 flex-grow-1">
                    <p class="fw-bolder  mb-0">Rabiul Sk </p>
                    <small class=" opacity-50 font">Web Developer</small>
                  </div>
                  <div class="icon-md">
                    <button class="btn btn-outline-primary border border-0 btn-light rounded-circle" type="button">
                      <i class="bi bi-plus-lg "></i>
                    </button>
                  </div>
                </div>



                <div class="d-grid gap-2">
                  <button class="btn btn-outline-primary border border-0 btn-light" type="button">View More</button>
                </div>
              </div>
            </div>





          </div>{" "}
          {/* Hidden on mobile */}
        </div>
      </div>
    </main>
  );
}

export default MainModule;

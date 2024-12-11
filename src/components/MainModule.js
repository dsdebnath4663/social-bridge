function MainModule() {
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
            <span className="fw-bold   d-lg-none d-xl-block d-xxl-none d-md-none d-lg-block">My Profile</span>

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
                <div className="card overflow-hidden  border-0">
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
                      <small className=" opacity-50 font">Web Developer at Webestica</small>


                      <p className="opacity-75 mt-3 mb-0">
                        I'd love to change the world, but they won’t give me the source code.


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
                      <p className="fw-bolder  mb-0">2.5K                      </p>
                      <small>Followers</small>
                    </div>
                    <div className="vr"></div>
                    <div>
                      <p className="fw-bolder  mb-0">256</p>
                      <small>Following</small>
                    </div>
                  </div>

                  <ul className="list-group list-group-flush border-top">
                    <li className="list-group-item border-0">
                      <a>
                        <i className="me-2 bi bi-house-heart"></i>
                        <span className="fw-bolder  mb-0"> Feed</span>
                      </a>
                    </li>
                    <li className="list-group-item border-0">
                      <a>
                        <i className=" me-2  bi bi-person-arms-up"></i>
                        <span className="fw-bolder  mb-0"> Connections</span>
                      </a>
                    </li>

                    <li className="list-group-item border-0">
                      <a>
                        <i className="me-2 bi bi-globe-americas"></i>
                        <span className="fw-bolder  mb-0"> Latest News </span>
                      </a>
                    </li>

                    <li className="list-group-item border-0">
                      <a>
                        <i className="me-2 bi bi-calendar2-event"></i>
                        <span className="fw-bolder  mb-0"> Event </span>
                      </a>
                    </li>

                    <li className="list-group-item border-0">
                      <a>
                        <i className="me-2  bi bi-chat-quote"></i>
                        <span className="fw-bolder  mb-0"> Groups</span>
                      </a>
                    </li>

                    <li className="list-group-item border-0">
                      <a>
                        <i className="me-2 bi bi-app-indicator"></i>
                        <span className="fw-bolder  mb-0"> Notifiction</span>
                      </a>
                    </li>
                    <li className="list-group-item border-0">
                      <a>
                        <i className="me-2 bi bi-gear"></i>
                        <span className="fw-bolder  mb-0">  Settings</span>
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
          <div className="col-md-8 col-lg-6">Middle Show
            <div className="card border-0" >
              <div className="card-body">
                <div className="d-flex flex-row mb-3">
                  <div className="p-2 ">
                    <a className="  btn bg-light   icon-md p-0 " href="#" role="button">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&s" className='rounded-2'>
                      </img>
                    </a>
                  </div>
                  <div className="p-2 flex-fill">

                    <div className="form-floating ">
                      <textarea className="form-control border border-0" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                      <label for="floatingTextarea ">Share your thoughts...</label>
                    </div>
                  </div>

                </div>

                {/* <ul className="navbar-nav ms-auto  mb-lg-0 hstack gap-2 gap-xl-3 justify-content-start"> */}
                <ul className="d-flex flex-wrap ps-0">
                  <li className="nav-item dropdown     list-style-none p-2">
                    <a className="nav-link bg-light  text-decoration-none py-1 px-2 rounded" href="#" role="button">
                      <img src="   https://cdn-icons-png.flaticon.com/512/1375/1375106.png " width="25" height="25" alt="" title="" className="img-small"></img>
                      <span className="ms-2">Photo</span>
                    </a>
                  </li>

                  <li className="nav-item dropdown     list-style-none p-2">
                    <a className="nav-link bg-light  text-decoration-none py-1 px-2 rounded" href="#" role="button">
                      <img src="    https://cdn-icons-png.flaticon.com/512/2699/2699194.png  " width="25" height="25" alt="" title="" className="img-small"></img>
                      <span className="ms-2">Video</span>
                    </a>

                  </li>
                  <li className="nav-item dropdown     list-style-none p-2 ">
                    <a className="nav-link bg-light  text-decoration-none py-1 px-2 rounded" href="#" role="button">
                      <img src="   https://cdn-icons-png.flaticon.com/512/1968/1968779.png " width="25" height="25" alt="" title="" className="img-small"></img>
                      <span className="ms-2">Event</span>
                    </a>

                  </li>
                  <li className="nav-item dropdown   list-style-none p-2 ">
                    <a className="nav-link bg-light  text-decoration-none py-1 px-2 rounded" href="#" role="button">
                      <img src="   https://cdn-icons-png.flaticon.com/512/1375/1375106.png " width="25" height="25" alt="" title="" className="img-small"></img>
                      <span className="ms-2">Feeling /Activity</span>
                    </a>
                  </li>

                  <li className="nav-item dropdown ms-lg-auto  list-style-none p-2">
                    <a className="nav-link bg-light  text-decoration-none py-1 px-2 rounded" href="#" role="button">
                      <i className="bi bi-three-dots"></i>
                      {/* <img src="   https://cdn-icons-png.flaticon.com/512/1375/1375106.png " width="25" height="25" alt="" title="" className="img-small"></img> */}
                    </a>
                  </li>


                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-none d-lg-block">Column</div>{" "}
          {/* Hidden on mobile */}
        </div>
      </div>
    </main >
  );
}

export default MainModule;

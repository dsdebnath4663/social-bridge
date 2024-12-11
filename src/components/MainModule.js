function MainModule() {
  return (
    <main>
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-3 left-bar ">
            <button
              class="btn btn-primary  d-lg-none d-xl-block d-xxl-none d-md-none d-lg-block"

              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <i class="bi bi-sliders"></i>
            </button>
            <span class="fw-bold   d-lg-none d-xl-block d-xxl-none d-md-none d-lg-block">My Profile</span>

            <div
              class="offcanvas offcanvas-start "
              data-bs-scroll="true"
              tabindex="-1"
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div class="offcanvas-header d-lg-none d-xl-block d-xxl-none d-md-none d-lg-block ">
                <h5
                  class="offcanvas-title"
                  id="offcanvasWithBothOptionsLabel"
                ></h5>
                <button
                  type="button "
                  class="btn-close "
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div class="card overflow-hidden">
                  {/* <div class="mh-100" style="width: 100px; height: 200px;">Max-height 100%</div> */}
                  <div class="card-img-top mh-100" alt="..." />

                  <div class="card-body">
                    <div className="text-center">
                      <a
                        class="btn bg-light profile-pic p-0 "
                        href="#"
                        role="button"
                      >
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&amp;s"
                          class="rounded-2"
                        />
                      </a>
                      <p class="fw-bolder fs-5  mt-3 mb-0">Sam Lanson</p>
                      <small class=" opacity-50 font">Web Developer at Webestica</small>


                      <p class="opacity-75 mt-3 mb-0">
                        I'd love to change the world, but they won’t give me the source code.


                      </p>
                    </div>
                  </div>

                  <div className="     hstack  gap-2 gap-xl-3 justify-content-center mb-3 text-center  mt-minus-3">
                    <div>
                      <p class="fw-bolder   mb-0">256</p>
                      <small>Post</small>
                    </div>
                    <div class="vr"></div>
                    <div>
                      <p class="fw-bolder  mb-0">2.5K                      </p>
                      <small>Followers</small>
                    </div>
                    <div class="vr"></div>
                    <div>
                      <p class="fw-bolder  mb-0">256</p>
                      <small>Following</small>
                    </div>
                  </div>

                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <a>
                        <i class="me-2 bi bi-house-heart"></i>
                        <span class="fw-bolder  mb-0"> Feed</span>
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a>
                        <i class=" me-2  bi bi-person-arms-up"></i>
                        <span class="fw-bolder  mb-0"> Connections</span>
                      </a>
                    </li>

                    <li class="list-group-item">
                      <a>
                        <i class="me-2 bi bi-globe-americas"></i>
                        <span class="fw-bolder  mb-0"> Latest News </span>
                      </a>
                    </li>

                    <li class="list-group-item">
                      <a>
                        <i class="me-2 bi bi-calendar2-event"></i>
                        <span class="fw-bolder  mb-0"> Event </span>
                      </a>
                    </li>

                    <li class="list-group-item">
                      <a>
                        <i class="me-2  bi bi-chat-quote"></i>
                        <span class="fw-bolder  mb-0"> Groups</span>
                      </a>
                    </li>

                    <li class="list-group-item">
                      <a>
                        <i class="me-2 bi bi-app-indicator"></i>
                        <span class="fw-bolder  mb-0"> Notifiction</span>
                      </a>
                    </li>
                    <li class="list-group-item">
                      <a>
                        <i class="me-2 bi bi-gear"></i>
                        <span class="fw-bolder  mb-0">  Settings</span>
                      </a>
                    </li>
                  </ul>
                  <div class="card-body text-center  py-2">
                    <a href="#" class="card-link text-decoration-none">
                      View Profile
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-6">Middle Show</div>
          <div class="col-lg-3 d-none d-lg-block">Column</div>{" "}
          {/* Hidden on mobile */}
        </div>
      </div>
    </main>
  );
}

export default MainModule;

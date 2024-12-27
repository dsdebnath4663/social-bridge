import React, { useRef } from "react";
import "./messaging.css";
import MessagingModal from "./MessagingModal";

const Messaging = () => {


  const openModalRef = useRef(null);

  const handleOpenModal = (callback) => {
    openModalRef.current = callback;
  };

  const openModalFromAnotherComponent = () => {
    if (openModalRef.current) {
      openModalRef.current();
    }
  };
  return (
    <div className="container ">
      <div className="row g-4 my-5 ">
        <div className="col-lg-4 vstack gap-4">
          lknjkbhjubhjub
          <div class="card">
            <div class="card-header bg-white">


              <div class="d-flex justify-content">
                <div class="p-2 flex-fill ">
                  <button type="button" class="btn btn-white">
                    Notifications <span class="badge text-bg-primary">4</span>
                  </button>
                </div>
                <div class="p-2  ">
                  <button type="button" class="btn btn-primary ms-auto rounded-circle"
                    onClick={openModalFromAnotherComponent}

                  >
                    edit
                  </button>
                </div>

              </div>

            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-8 vstack gap-4">
          Messaging
          {/* <a
            class="btn btn-primary"
            data-bs-toggle="offcanvas"F
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            Link with href
          </a> */}
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </div>
              <div class="dropdown mt-3">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card text-center">
            <div class="card-header bg-white">
              <div class="d-flex flex-wrap">
                <div class=" flex-grow-1">
                  <div class="d-flex">
                    <div class="flex-shrink-1">
                      <img
                        src="https://social.webestica.com/assets/images/avatar/01.jpg"
                        class="rounded-circle feed-icon-rounded-circle p-2"
                        alt="..."
                      />
                    </div>
                    <div class=" flex-shrink-1">
                      <p class="fw-bolder  mb-0 mt-2">Judy Nguyen</p>
                      <p>Online</p>
                      {/* <p>
                        <span class=" p-2 bg-success  rounded-circle ms-1 ms-2 ">
                          <span class="visually-hidden">New alerts</span>
                        </span>

                      </p> */}

                      <div class="d-flex"></div>
                    </div>
                  </div>
                </div>
                <div class="p-2 flex-shrink-1">
                  <div class="d-flex">
                    <ul class="navbar-nav ms-auto mb-lg-0 hstack gap-2 gap-xl-3 justify-content-center">
                      <li class="nav-item dropdown">
                        <a
                          class="btn bg-light"
                          href="/messaging"
                          data-discover="true"
                        >
                          <i class="bi bi-chat-left-text-fill"></i>
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="btn bg-light"
                          href="/messaging"
                          data-discover="true"
                        >
                          <i class="bi bi-gear"></i>
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="btn bg-light"
                          href="/messaging"
                          data-discover="true"
                        >
                          <i class="bi bi-megaphone-fill"></i>
                          <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
                            <span class="visually-hidden">unread messages</span>
                          </span>
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="btn bg-light icon-md p-0"
                          href="/messaging"
                          data-discover="true"
                        >
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&amp;s"
                            class="rounded-2"
                            alt="User Profile"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="card-body overflow-auto" style={{height: `200px`}}> */}
            <div
              className="card-body  custom-scroll overflow-auto"
              style={{ height: "450px" }}
            >
              {/*  justify-content-start  */}
              <div class="d-flex justify-content-start mb-3">
                <div class="p-2 bd-highlight">Justify</div>
                <div class="p-2 bd-highlight">Content</div>
                <div class="p-2 bd-highlight">Start</div>
              </div>

              {/*  justify-content-end */}
              <div class="d-flex justify-content-end mb-3">
                <div class="p-2 bd-highlight">Justify</div>
                <div class="p-2 bd-highlight">Content</div>
                <div class="p-2 bd-highlight">End</div>
              </div>

              <p>Jul 16, 2022, 06:15 am</p>
              {/*  justify-content-start  */}
              <div class="d-flex justify-content-start ">
                <div class="p-2">
                  <a
                    class="btn bg-light icon-md p-0"
                    href="/messaging"
                    data-discover="true"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&amp;s"
                      class="rounded-circle"
                      alt="User Profile"
                    />
                  </a>
                </div>

                <div class="p-2 flex-grow-0 ">
                  <div class="bg-light rounded px-3 py-2">
                    Applauded no discovery in newspaper allowance am northward😊
                  </div>
                  <p>12:16 PM</p>
                </div>
              </div>

              {/*  justify-content-end */}
              <div class="d-flex justify-content-end ">
                <div class="p-2 flex-grow-0 ">
                  <div class="bg-primary text-white rounded px-3 py-2">
                    Applauded no discovery in newspaper allowance am northward😊
                  </div>
                  <div class="d-flex flex-row-reverse">
                    <div class="p-2">
                      <p>
                        12:16 PM
                        <i class="bi bi-check-all text-primary"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-start ">
                <div class="p-2">
                  <a
                    class="btn bg-light icon-md p-0"
                    href="/messaging"
                    data-discover="true"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&amp;s"
                      class="rounded-circle"
                      alt="User Profile"
                    />
                  </a>
                </div>
                <div class="p-2 flex-grow-0 ">
                  <div class="bg-light rounded px-3 py-2">
                    Applauded no discovery in newspaper allowance am northward😊
                  </div>
                  <p>12:16 PM</p>
                </div>
              </div>

              {/* <div class="d-flex justify-content-start ">
                <div class="p-2">
                  <a
                    class="btn bg-light icon-md p-0"
                    href="/messaging"
                    data-discover="true"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&amp;s"
                      class="rounded-circle"
                      alt="User Profile"
                    />
                  </a>
                </div>
                <div class="p-2flex-grow-1 ">
                  <div class="bg-light rounded px-3 py-2">Congratulations:

                  </div>
                  <img src="https://thumbs.dreamstime.com/b/clapping-hands-vector-illustration-35837039.jpg" class="rounded float-start w-25" alt="..." />

                  <p>12:16 PM</p>

                </div>
                <div>

                </div>



              </div> */}
              <div class="d-flex justify-content-start  p-3 rounded">
                <div class="p-2">
                  <a
                    class="btn bg-light icon-md p-0"
                    href="/messaging"
                    data-discover="true"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&amp;s"
                      class="rounded-circle"
                      alt="User Profile"
                    />
                  </a>
                </div>
                <div class="p-2 flex-grow-1">
                  <div class="d-flex flex-column">
                    <div class="bg-light rounded w-25 me-3  mb-0 flex-shrink-1">
                      Congratulations:
                    </div>
                    <div class="bg-light rounded w-25 me-3 py-1 flex-shrink-1">
                      <img
                        src="https://thumbs.dreamstime.com/b/clapping-hands-vector-illustration-35837039.jpg"
                        class="rounded w-75 me-3 p-2 flex-shrink-1"
                        alt="Clapping Hands "
                      />
                      <p>12:16 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex flex-column align-items-start">
                <div class="bg-light text-secondary p-3 rounded-2">
                  <div class="typing d-flex align-items-center">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer text-body-secondary">
              <div class="d-flex flex-wrap bg-white">
                <div class=" flex-grow-1 ps-1">
                  <textarea
                    class="form-control mb-sm-0 mb-3"
                    data-autoresize=""
                    placeholder="Type a message"
                    rows="1"
                  ></textarea>
                </div>
                <div class="p-2 flex-shrink-1">
                  <div class="d-flex">
                    <ul class="navbar-nav ms-auto mb-lg-0 hstack gap-2 gap-xl-3 justify-content-center">
                      <li class="nav-item dropdown">
                        <a
                          class="btn bg-light"
                          href="/messaging"
                          data-discover="true"
                        >
                          <i class="bi bi-chat-left-text-fill"></i>
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="btn bg-light"
                          href="/messaging"
                          data-discover="true"
                        >
                          <i class="bi bi-gear"></i>
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="btn bg-light"
                          href="/messaging"
                          data-discover="true"
                        >
                          <i class="bi bi-megaphone-fill"></i>
                          <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
                            <span class="visually-hidden">unread messages</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Pass the handleOpenModal function to MessagingModal */}
      <MessagingModal handleOpenModal={handleOpenModal} />
    </div>
  );
};

export default Messaging;

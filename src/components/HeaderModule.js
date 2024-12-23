import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import "./header/header.css"
function HeaderModule() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle function to change the state
  const handleToggle = useCallback(() => {
    setIsNavOpen((prev) => !prev);
  }, []);

  const handleSubmenuClick = useCallback((event) => {
    event.stopPropagation(); // Prevent closing of the parent dropdown
  }, []);

  return (
    <header className="navbar-light fixed-top header-static">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <Link className="btn btn-primary me-2" to="/default-home">
            <i className="bi bi-megaphone-fill"></i>
          </Link>

          <button
            className="btn bg-light navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className={`toggle-icon pt-1 ${isNavOpen ? 'bi bi-x-lg fs-4' : 'bi bi-list'}`}></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex position-relative form-padding" role="search">
              <input className="form-control ps-5 bg-light" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn position-absolute top-1" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>


            <div class="d-flex flex-row-reverse ms-auto">

              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item dropdown border-btm custom-li">
                  <Link
                    className="nav-link dropdown-toggle fw-semibold"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>


                  <ul className="dropdown-menu bg-white border-0 shadow-sm p-3 mb-5 rounded">
                    <li className="sub-menu-dropdown dropdown position-relative-desktop">
                      <Link
                        className="dropdown-item dropdown-toggle 1nav-link dropdown-toggle fw-semibold"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={handleSubmenuClick}
                      >
                        Profile
                      </Link>
                      <ul className="position-absolute-desktop translate-middle-desktop dropdown-menu sub-menu bg-white border-0 shadow-sm p-3 mb-5 rounded">
                        <li><Link className="dropdown-item dropdown-toggle nav-link dropdown-toggle fw-semibold" to="/feed/home">Feed</Link></li>
                        <li><Link className="dropdown-item dropdown-toggle nav-link dropdown-toggle fw-semibold" to="/feed/about">About</Link></li>
                        <li><Link className="dropdown-item dropdown-toggle nav-link dropdown-toggle fw-semibold" to="/feed/connections">Connections</Link></li>
                        <li><Link className="dropdown-item dropdown-toggle nav-link dropdown-toggle fw-semibold" to="/feed/media">Media</Link></li>
                        <li><Link className="dropdown-item dropdown-toggle nav-link dropdown-toggle fw-semibold" to="/feed/videos">Videos</Link></li>
                        <li><Link className="dropdown-item dropdown-toggle nav-link dropdown-toggle fw-semibold" to="/feed/events">Events</Link></li>
                        <li><Link className="dropdown-item dropdown-toggle nav-link dropdown-toggle fw-semibold" to="/feed/activity">Activity</Link></li>
                      </ul>
                    </li>
                    {/* <li><Link className="dropdown-item dropdown-toggle nav-link dropdown-toggle fw-semibold"  to="/default-home">Authentication</Link> */}

                    <li><Link className="dropdown-item dropdown-toggle nav-link dropdown-toggle fw-semibold" to="/default-home">Home post</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item dropdown border-btm custom-li">
                  <Link
                    className="nav-link dropdown-toggle fw-semibold"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Account
                  </Link>


                  <ul className="dropdown-menu bg-white border-0 shadow-sm p-3 mb-5 rounded">
                    <li className="sub-menu-dropdown dropdown position-relative-desktop">
                      <Link
                        className="dropdown-item dropdown-toggle nav-link dropdown-toggle fw-semibold"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={handleSubmenuClick}
                      >
                        Authentication
                      </Link>
                      <ul className="position-absolute-desktop translate-middle-desktop dropdown-menu sub-menu bg-white border-0 shadow-sm p-3 mb-5 rounded">

                        <li>
                          <Link className="dropdown-item remove dropdown-toggle nav-link dropdown-toggle fw-semibold" to="/authentication/sign-in">Sign In</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item remove dropdown-toggle nav-link dropdown-toggle fw-semibold" to="/authentication/sign-up">Sign Up</Link>
                        </li>

                        <li>
                          <Link className="dropdown-item remove dropdown-toggle nav-link dropdown-toggle fw-semibold" to="/authentication/forgot-password">Forgot Password</Link>
                        </li>
                      </ul>
                    </li>

                  </ul>
                </li>
              </ul>
            </div>





          </div>

          <ul className="navbar-nav ms-auto mb-lg-0 hstack gap-2 gap-xl-3 justify-content-center">
            <li className="nav-item dropdown">
              <Link className="btn bg-light" to="#">
                <i className="bi bi-chat-left-text-fill"></i>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="btn bg-light" to="#">
                <i className="bi bi-gear"></i>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="btn bg-light" to="#">
                <i className="bi bi-megaphone-fill"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="btn bg-light icon-md p-0" to="#">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&s" className="rounded-2" alt="User Profile" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderModule;

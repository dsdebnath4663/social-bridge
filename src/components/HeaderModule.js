import { useState } from 'react';

function HeaderModule() {
  // State to track whether the navbar is toggled or not
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle function to change the state
  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="navbar-light fixed-top header-static">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <a className="btn btn-primary me-2" href="#" role="button"><i className="bi bi-megaphone-fill"></i></a>

          <a className="btn bg-light navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isNavOpen ? "true" : "false"} aria-label="Toggle navigation" onClick={handleToggle} // Handle toggle click
          >
            <span className={` toggle-icon pt-1 ${isNavOpen ? '<i className="bi bi-x-lg fs-4"></i>' : '<i className="bi bi-list "></i>'}`}></span>

          </a>

          {/* navbar-collapse collapse show px-3 py-1 */}
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <form className="d-flex  position-relative form-padding" role="search">
              <input className="form-control ps-5 bg-light  " type="search" placeholder="Search" aria-label="Search" />
              <button className="btn  position-absolute top-1 " type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
            {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

              <li className="nav-item dropdown  border-btm  custom-li ">
                <a className="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu bg-white  border border-0 shadow-sm p-3 mb-5  rounded">
                  <li>
                    <a className="dropdown-item" href="#">Home default</a>
                  </li>
                  <li><a className="dropdown-item" href="#">Home classic</a></li>
                  <li><a className="dropdown-item" href="#">Home post</a></li>
                  <li><a className="dropdown-item" href="#">Home video</a></li>
                  <li><a className="dropdown-item" href="#">Home event</a></li>
                  <li><a className="dropdown-item" href="#">Landing page</a></li>
                  <li><a className="dropdown-item" href="#">App download</a></li>
                </ul>


              </li>



            </ul> */}
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <!-- Multilevel Dropdown --> */}
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle fw-semibold" href="#" id="dropdownMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                  <li><a class="dropdown-item" href="#">Home default</a></li>
                  <li><a class="dropdown-item" href="#">Home classic</a></li>
                  <li class="sub-menu-dropdown dropdown position-relative">
                    <a class="dropdown-item dropdown-toggle " href="#">More options</a>
                    <ul class=" position-absolute  translate-middle dropdown-menu sub-menu">
                      <li><a class="dropdown-item" href="#">Submenu 1</a></li>
                      <li class="dropdown">
                        <a class="dropdown-item " href="#">Submenu 2</a>
                      </li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="#">App download</a></li>
                </ul>
              </li>
            </ul>

          </div>

          {/* hstack gap-2 gap-xl-3 justify-content-center */}
          <ul className="navbar-nav ms-auto  mb-lg-0 hstack gap-2 gap-xl-3 justify-content-center">

            <li className="nav-item dropdown ">
              <a className="btn bg-light " href="#" role="button"><i className="bi bi-chat-left-text-fill"></i></a>
            </li>
            <li className="nav-item dropdown ">
              <a className="btn bg-light " href="#" role="button"><i className="bi bi-gear"></i></a>
            </li>



            <li className="nav-item dropdown ">
              <a className="btn bg-light " href="#" role="button">
                <i className="bi bi-megaphone-fill "></i>
                <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span className="visually-hidden">unread messages</span></span>
              </a>
            </li>
            <li className="nav-item dropdown ">
              <a className="btn bg-light   icon-md p-0 " href="#" role="button">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&s" className='rounded-2'>
                </img>
              </a>
            </li>

          </ul>

        </div>
      </nav>


    </header>
  );
}

export default HeaderModule;

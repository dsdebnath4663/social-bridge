import { useState } from 'react';

function HeaderModule() {
  // State to track whether the navbar is toggled or not
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle function to change the state
  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header class="navbar-light fixed-top header-static">
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container">
          <a class="btn btn-primary me-2" href="#" role="button"><i class="bi bi-megaphone-fill"></i></a>

          <a class="btn bg-light navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isNavOpen ? "true" : "false"} aria-label="Toggle navigation" onClick={handleToggle} // Handle toggle click
          >
            <span className={` toggle-icon pt-1 ${isNavOpen ? '<i class="bi bi-x-lg fs-4"></i>' : '<i class="bi bi-list "></i>'}`}></span>

          </a>

          {/* navbar-collapse collapse show px-3 py-1 */}
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <form class="d-flex  position-relative form-padding" role="search">
              <input class="form-control ps-5 bg-light  " type="search" placeholder="Search" aria-label="Search" />
              <button class="btn  position-absolute top-1 " type="submit">
                <i class="bi bi-search"></i>
              </button>
            </form>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">

              <li class="nav-item dropdown  border-btm  custom-li">
                <a class="nav-link dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu bg-light  ">
                  <li><a class="dropdown-item" href="#">Home default</a></li>
                  <li><a class="dropdown-item" href="#">Home classic</a></li>
                  <li><a class="dropdown-item" href="#">Home post</a></li>
                  <li><a class="dropdown-item" href="#">Home video</a></li>
                  <li><a class="dropdown-item" href="#">Home event</a></li>
                  <li><a class="dropdown-item" href="#">Landing page</a></li>
                  <li><a class="dropdown-item" href="#">App download</a></li>
                </ul>
              </li>



            </ul>

          </div>

          {/* hstack gap-2 gap-xl-3 justify-content-center */}
          <ul class="navbar-nav ms-auto  mb-lg-0 hstack gap-2 gap-xl-3 justify-content-center">

            <li class="nav-item dropdown ">
              <a class="btn bg-light " href="#" role="button"><i class="bi bi-chat-left-text-fill"></i></a>
            </li>
            <li class="nav-item dropdown ">
              <a class="btn bg-light " href="#" role="button"><i class="bi bi-gear"></i></a>
            </li>



            <li class="nav-item dropdown ">
              <a class="btn bg-light " href="#" role="button">
                <i class="bi bi-megaphone-fill "></i>
                <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
              </a>
            </li>
            <li class="nav-item dropdown ">
              <a class="btn bg-light   icon-md p-0 " href="#" role="button">
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

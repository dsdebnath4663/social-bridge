const Connections = () => {
  return (
    <div class="card my-4">
      <div class="card-body">
        <div class="d-flex">
          <h5 class="card-title">Experience</h5>

        </div>
        <div class="d-flex">
          <div class="flex-shrink-1">
            <img
              src="https://social.webestica.com/assets/images/avatar/01.jpg"
              class="rounded-circle feed-icon-rounded-circle p-2"
              alt="..."
            />
          </div>
          <div class=" flex-shrink-1">
            <p class="fw-bolder  mb-0 mt-2">
              Apple Computer, Inc.
              <span class="opacity-25 ms-3">Full Stack Web Developer</span>
            </p>
            <div class="d-flex">
              <div class="p-2 flex-shrink-1 flex-avatar-overlap ">
                <img
                  src="https://social.webestica.com/assets/images/avatar/01.jpg"
                  class="rounded-circle avatar-xxs"
                  alt="..."
                />
              </div>

              <div class="p-2 flex-shrink-1 flex-avatar-overlap position-relative">
                <div
                  type="button"
                  class="rounded-circle avatar-xxs 
                position-absolute top-50 start-50 translate-middle bg-primary rounded-pill text-white"
                >
                  <span>+2</span>
                </div>
              </div>

              <div class="p-2 ms-4">
                Flex Carolyn Ortiz, Frances Guerrero, and 20 other shared
                connections
              </div>
            </div>
          </div>
          <div className=" flex-grow-1">

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-primary me-md-2" type="button"> Remove </button>
              <button class="btn btn-primary" type="button">Button</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Connections;

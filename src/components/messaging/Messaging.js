import React, { useRef, useState } from "react";
import "./messaging.css";
import MessagingModal from "./MessagingModal";
import MessagingInbox from "./messageInbox";

const Messaging = () => {
  const [activeMessage, setActiveMessage] = useState(null);

  const handleActiveMessage = (messageId) => {
    setActiveMessage(messageId);
  };

  const openModalRef = useRef(null);

  const handleOpenModal = (callback) => {
    openModalRef.current = callback;
  };

  const openModalFromAnotherComponent = () => {
    if (openModalRef.current) {
      openModalRef.current();
    }
  };


  const messages = [
    { id: 1, title: "List group item heading", content: "Some placeholder content in a paragraph.", time: "3 days ago" },
    { id: 2, title: "List group item heading", content: "Some placeholder content in a paragraph.", time: "3 days ago" },
    { id: 3, title: "List group item heading", content: "Some placeholder content in a paragraph.", time: "3 days ago" },
    { id: 4, title: "List group item heading", content: "Some placeholder content in a paragraph.", time: "3 days ago" },
  ];

  return (
    <div className="container ">
      <div className="row g-4 my-5 ">
        <div className="col-lg-4 vstack gap-4">
          <div class="card ">
            <div class="card-header bg-white">
              <div class="d-flex justify-content">
                <div class="p-2 flex-fill ">
                  <button type="button" class="btn btn-white">
                    Notifications <span class="badge text-bg-primary">4</span>
                  </button>
                </div>
                <div class="p-2  ">
                  <button
                    type="button"
                    class="btn btn-primary ms-auto rounded-circle"
                    onClick={openModalFromAnotherComponent}
                  >
                    edit
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body  ">
              <div class=" flex-grow-1 ps-1">
                <form
                  class="d-flex position-relative form-padding"
                  role="search"
                >
                  <input
                    class="form-control ps-5 bg-light"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn position-absolute top-0 end-0"
                    type="submit"
                  >
                    <i class="bi bi-search"></i>
                  </button>
                </form>
              </div>


              <div class="list-group custom-scroll overflow-auto ps-1 mt-2">

                {messages.map((message) => (
                  <a
                    key={message.id}
                    href="#"
                    className={`list-group-item list-group-item-action ${activeMessage === message.id ? "active" : ""}`}
                    onClick={() => handleActiveMessage(message.id)}
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{message.title}</h5>
                      <small className={` ${activeMessage !== message.id ? "text-body-secondary" : ""}`}>
                        {message.time}
                      </small>
                    </div>
                    <p className="mb-1">{message.content}</p>
                    <small className={` ${activeMessage !== message.id ? "text-body-secondary" : ""}`}>And some muted small print.</small>
                  </a>
                ))}
              </div>            </div>
          </div>
        </div>
        <div className="col-lg-8 vstack gap-4">
          {/* <a
            class="btn btn-primary"
            data-bs-toggle="offcanvas"
            F
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
          <MessagingInbox />
        </div>
      </div>

      {/* Pass the handleOpenModal function to MessagingModal */}
      <MessagingModal handleOpenModal={handleOpenModal} />
    </div>
  );
};

export default Messaging;

import React, { useRef, useState } from "react";
import "./messaging.css";
import MessageBody from "./MessageBody";

const MessagingInbox = () => {
  const [messages] = useState([
    {
      id: 1,
      senderName: "Judy Nguyen",
      senderImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&s",
      time: "Jul 16, 2022, 06:15 am",
      content: "Applauded no discovery in newspaper allowance am northward😊",
      isSentByCurrentUser: false,
    },
    {
      id: 2,
      senderName: "You",
      senderImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&s",
      time: "Jul 16, 2022, 06:30 am",
      content: "Great job on the report! 👍",
      isSentByCurrentUser: true,
    },
    // Add more messages as needed
  ]);
  return (
    <div class="card text-center">
      <div class="card-header bg-white">
        <div class="d-flex flex-wrap">
          <div class=" flex-grow-1">
            <div class="d-flex">
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

              <div class=" flex-shrink-1">
                <p class="fw-bolder  mb-0 mt-2">Judy Nguyen</p>
                <div class="d-flex align-items-center mt-0 lh-1">
                  <span class="position-relative me-2 ms-1">
                    <span class="bg-success rounded-circle border border-light position-absolute online"
                    >
                    </span>
                  </span>
                  <span className="fs-6 ms-1">Online</span>
                </div>

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



      <MessageBody />
      <div class="card-footer text-body-secondary bg-white">
        <div class="d-flex flex-wrap ">
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
                <li class="nav-item dropdown text-danger ">
                  <a
                    class="btn btn-danger"
                    href="/messaging"
                    data-discover="true"
                  >
                    <i class="bi bi-emoji-smile-fill"></i>
                  </a>
                </li>
                <li class="nav-item dropdown text-dark">
                  <a
                    class="btn btn-dark"
                    href="/messaging"
                    data-discover="true"
                  >
                    <i class="bi bi-paperclip "></i>
                  </a>
                </li>
                <li class="nav-item dropdown text-primary">
                  <a
                    class="btn btn-primary"
                    href="/messaging"
                    data-discover="true"
                  >
                    <i class="bi bi-send-fill"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingInbox;

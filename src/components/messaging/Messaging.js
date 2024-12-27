import React, { useState, useRef } from "react";
import "./messaging.css";
import MessagingModal from "./MessagingModal";

const Messaging = () => {
  // Sample contacts data
  const contacts = [
    { id: 1, name: "User 1", image: "https://placehold.co/400" },
    { id: 2, name: "User 2", image: "https://placehold.co/400" },
    { id: 3, name: "User 3", image: "https://placehold.co/400" },
  ];

  // Sample conversations data (this could come from an API or database)
  const initialConversations = {
    1: [
      { sender: "user", text: "Hey there!", time: "2:30 PM", seen: true },
      { sender: "receiver", text: "Hello! How are you?", time: "2:35 PM", seen: false },
      {
        sender: "user",
        text: "I'm doing well, just been busy with work. Here's a picture of the sunset I saw earlier today!",
        time: "2:40 PM",
        seen: true,
        image: "https://placehold.co/200",
      },
    ],
    2: [
      { sender: "user", text: "How's it going?", time: "3:00 PM", seen: true },
      { sender: "receiver", text: "Good, just working on something.", time: "3:05 PM", seen: false },
    ],
    3: [
      { sender: "user", text: "Are we still on for the meeting?", time: "4:00 PM", seen: true },
      { sender: "receiver", text: "Yes, definitely. See you soon!", time: "4:05 PM", seen: false },
    ],
  };

  // State to manage selected contact and conversations
  const [activeContact, setActiveContact] = useState(null);
  const [conversations, setConversations] = useState(initialConversations);
  const [newMessage, setNewMessage] = useState("");
  const openModalRef = useRef(null);

  // Handle selecting a contact
  const handleContactClick = (contact) => {
    setActiveContact(contact);
  };

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage && activeContact) {
      // Update conversation for the active contact
      const updatedConversations = { ...conversations };
      updatedConversations[activeContact.id].push({
        sender: "user",
        text: newMessage,
        time: new Date().toLocaleTimeString(),
        seen: false,
      });

      setConversations(updatedConversations);
      setNewMessage(""); // Clear the input
    }
  };

  const handleOpenModal = (callback) => {
    openModalRef.current = callback;
  };

  const openModalFromAnotherComponent = () => {
    if (openModalRef.current) {
      openModalRef.current();
    }
  };

  return (
    <div className="container">
      <div className="row g-4 my-5">
        <div className="col-lg-3 vstack gap-4">
          <div className="card">
            <div className="card-header bg-white">
              <div className="d-flex justify-content">
                <div className="p-2 flex-fill">
                  <button type="button" className="btn btn-white">
                    Notifications <span className="badge text-bg-primary">4</span>
                  </button>
                </div>
                <div className="p-2">
                  <button
                    type="button"
                    className="btn btn-primary ms-auto rounded-circle"
                    onClick={openModalFromAnotherComponent}
                  >
                    edit
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="flex-grow-1 ps-1">
                <form className="d-flex position-relative form-padding" role="search">
                  <input className="form-control ps-5 bg-light" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn position-absolute top-0 end-0" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </form>
              </div>

              <div className="list-group custom-scroll overflow-auto ps-1 mt-2">
                <ul className="list-group">
                  {contacts.map((contact) => (
                    <li
                      key={contact.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                      onClick={() => handleContactClick(contact)} // Set active contact on click
                    >
                      <div className="d-flex align-items-center">
                        <div className="position-relative me-3">
                          <img src={contact.image} className="rounded-circle profile-img" alt={contact.name} />
                          <span className="position-absolute bottom-0 end-0 translate-middle p-1 bg-success border border-light rounded-circle status-indicator"></span>
                        </div>
                        <div>
                          <p className="mb-0">{contact.name}</p>
                          <small className="text-muted">Last message...</small>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-9 vstack gap-4">
          <div className="card text-center">
            <div className="card-header bg-white">
              <div className="d-flex flex-wrap">
                <div className="flex-grow-1">
                  <div className="d-flex">
                    <div className="p-2">
                      <a className="btn bg-light icon-md p-0" href="/messaging" data-discover="true">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&amp;s" className="rounded-circle" alt="User Profile" />
                      </a>
                    </div>
                    <div className="flex-shrink-1">
                      <p className="fw-bolder mb-0 mt-2">{activeContact ? activeContact.name : 'Select a contact'}</p>
                      <div className="d-flex align-items-center mt-0 lh-1">
                        <span className="position-relative me-2 ms-1">
                          <span className="bg-success rounded-circle border border-light position-absolute online"></span>
                        </span>
                        <span className="fs-6 ms-1">{activeContact ? 'Online' : ''}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 flex-shrink-1">
                  <div className="d-flex">
                    <ul className="navbar-nav ms-auto mb-lg-0 hstack gap-2 gap-xl-3 justify-content-center">
                      <li className="nav-item dropdown">
                        <a className="btn bg-light" href="/messaging" data-discover="true">
                          <i className="bi bi-chat-left-text-fill"></i>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="btn bg-light" href="/messaging" data-discover="true">
                          <i className="bi bi-gear"></i>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="btn bg-light" href="/messaging" data-discover="true">
                          <i className="bi bi-megaphone-fill"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body custom-scroll overflow-auto">
              <ul className="list-unstyled">
                {activeContact &&
                  conversations[activeContact.id].map((message, index) => (
                    <div key={index}>
                      {message.image ? (
                        <li className="d-flex mb-3">
                          <div className="d-flex align-items-center flex-column">
                            <img src="https://placehold.co/50" alt="User" className="rounded-circle me-2" />
                          </div>
                          <div className="d-flex align-items-center ms-2">
                            <img src={message.image} alt="Image Message" className="img-fluid rounded-3 shadow-sm mt-2" />
                          </div>
                        </li>
                      ) : (
                        <li className={`d-flex mb-3 ${message.sender === "receiver" ? "justify-content-end" : ""}`}>
                          <div className="d-flex align-items-center">
                            <img src="https://placehold.co/50" alt={message.sender === "user" ? "User" : "Receiver"} className={`rounded-circle me-2 ${message.sender === "receiver" ? "ms-2" : ""}`} />
                            <div>
                              <div className={`bg-${message.sender === "user" ? "primary" : "light"} text-${message.sender === "user" ? "white" : "dark"} p-2 rounded-3 shadow-sm`}>
                                {message.text}
                              </div>
                              <div className="text-end mt-1" style={{ fontSize: "0.75rem", color: "#d1d1d1" }}>
                                {message.seen ? (
                                  <i className="bi bi-check-all" style={{ color: "#4caf50" }}></i>
                                ) : (
                                  <i className="bi bi-check" style={{ color: "#d1d1d1" }}></i>
                                )}
                                <span> Seen at {message.time}</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      )}
                    </div>
                  ))}
              </ul>
            </div>

            <div className="card-footer text-body-secondary bg-white">
              <div className="d-flex flex-wrap">
                <div className="flex-grow-1 ps-1">
                  <textarea
                    className="form-control mb-sm-0 mb-3"
                    placeholder="Type a message"
                    rows="1"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                </div>
                <div className="p-2 flex-shrink-1">
                  <div className="d-flex">
                    <ul className="navbar-nav ms-auto mb-lg-0 hstack gap-2 gap-xl-3 justify-content-center">
                      <li className="nav-item dropdown text-danger">
                        <a className="btn btn-danger" href="/messaging" data-discover="true">
                          <i className="bi bi-emoji-smile-fill"></i>
                        </a>
                      </li>
                      <li className="nav-item dropdown text-dark">
                        <a className="btn btn-dark" href="/messaging" data-discover="true">
                          <i className="bi bi-paperclip"></i>
                        </a>
                      </li>
                      <li className="nav-item dropdown text-primary">
                        <a className="btn btn-primary" href="/messaging" data-discover="true" onClick={handleSendMessage}>
                          <i className="bi bi-send-fill"></i>
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

      <MessagingModal handleOpenModal={handleOpenModal} />
    </div>
  );
};

export default Messaging;

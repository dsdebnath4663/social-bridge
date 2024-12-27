import React from "react";

// Sample list of messages with random text for the conversation
const messages = [
  {
    sender: "user",
    text: "Applauded no discovery in newspaper allowance am northward😊",
    time: "2:30 PM",
    seen: true,
  },
  {
    sender: "receiver",
    text: "I'm good! Thanks for asking. How about you?",
    time: "2:35 PM",
    seen: false,
  },
  {
    sender: "user",
    text: "I'm doing well, just been busy with work. Here's a picture of the sunset I saw earlier today!",
    time: "2:40 PM",
    seen: true,
    image: "https://placehold.co/200",
  },
  {
    sender: "receiver",
    text: "Wow, that's beautiful! Where did you take this photo?",
    time: "2:45 PM",
    seen: false,
  },
  {
    sender: "user",
    text: "I took it from my backyard. It was the perfect moment, had to capture it.",
    time: "2:50 PM",
    seen: true,
  },
];


const MessageBody = () => {
  return (
    <div className="card-body custom-scroll overflow-auto">
      <ul className="list-unstyled">
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            {message.image ? (
              // Keep the original structure for Image Message
              <li className="d-flex mb-3">
                <div className="d-flex align-items-center flex-column">
                  <img
                    src="https://placehold.co/50"
                    alt="User"
                    className="rounded-circle me-2"
                  />
                </div>
                <div className="d-flex align-items-center ms-2">
                  <img
                    src={message.image}
                    alt="Image Message"
                    className="img-fluid rounded-3 shadow-sm mt-2"
                  />
                </div>
              </li>
            ) : (
              // Other message types (text-based)
              <li
                className={`d-flex mb-3 ${message.sender === "receiver" ? "justify-content-end" : ""}`}
              >
                <div className="d-flex align-items-center">
                  {/* Render the sender's image */}
                  <img
                    src="https://placehold.co/50"
                    alt={message.sender === "user" ? "User" : "Receiver"}
                    className={`rounded-circle me-2 ${message.sender === "receiver" ? "ms-2" : ""}`}
                  />

                  <div>
                    {/* Render the message */}
                    <div
                      className={`bg-${message.sender === "user" ? "primary" : "light"} text-${message.sender === "user" ? "white" : "dark"} p-2 rounded-3 shadow-sm`}
                    >
                      {message.text}
                    </div>

                    {/* Render time and seen status */}
                    <div
                      className="text-end mt-1"
                      style={{ fontSize: "0.75rem", color: "#d1d1d1" }}
                    >
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
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default MessageBody;
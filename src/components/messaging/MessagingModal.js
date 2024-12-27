import React, { useEffect, useState } from "react";
import "./messaging.css";

const MessagingModal = ({ handleOpenModal }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (handleOpenModal) {
      handleOpenModal(() => setIsModalVisible(true));
    }
  }, [handleOpenModal]);

  return (
    <>
      {/* Modal */}
      {isModalVisible && (
        <div className="card text-center position-absolute bottom-right-corner">
          <div className="card-header">
            Featured
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleCloseModal}
            ></button>
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-body-secondary">2 days ago</div>
        </div>
      )}
    </>
  );
};

export default MessagingModal;

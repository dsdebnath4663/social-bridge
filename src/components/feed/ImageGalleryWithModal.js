import React, { useEffect, useState } from 'react';

import '../modal/ImageGalleryWithModal.css'
function ImageGalleryWithModal() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);


  const images = [
    "https://editaphotography.in/blog/wp-content/uploads/2018/01/best_children_photographer_Pune-2000x1200.jpg",
    "https://img.freepik.com/free-photo/man-with-his-arms-crossed-white-background_1368-4244.jpg?ga=GA1.1.154970172.1733322318&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/man-cheerful-studio-portrait-concept_53876-48572.jpg?ga=GA1.1.154970172.1733322318&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/smiling-woman-with-tablet-computer_78203-628.jpg?ga=GA1.1.154970172.1733322318&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/businesswoman-signing-document-contract-sale-new-house_23-2148182974.jpg?ga=GA1.1.154970172.1733322318&semt=ais_hybrid",
  ];

  const handleImageClick = (image, index) => {
    setCurrentIndex(index);
    setSelectedImage(image);
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle keyboard events for left and right arrows
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event)
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    // Add event listener for keydown
    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  return (
    <div>
      <div className="row justify-content-center gx-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`col-${index < 2 ? '6' : '4'} justify-content-center text-center`}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            // onClick={() =>
            //   handleImageClick(image, index)
            // }
            onClick={() => {
              handleImageClick(image, index);
            }}

          >
            <img
              src={image}
              className={`img-thumbnail border border-0 px-1 py-1 ${index < 2 ? 'img-avatar' : 'img-avatar-sm'}`}
              alt={`Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"

      >
        <div className='naviagtion-menu'>
          <button
            className={`carousel-control-prev position-fixed start-0 top-50 translate-middle-y "}`}

            type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev"
            onClick={handlePrevious} >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            className={`carousel-control-next position-fixed end-0 top-50 translate-middle-y`}
            type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next"
            onClick={handleNext}>
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          <div className="modal-header bg-transparent border-0 shadow-none">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="modal-dialog modal-dialog modal-dialog-centered">

          <div className="modal-content">

            <div className="modal-body text-center">

              <p>current Index is:- {currentIndex}</p>

              {selectedImage ? (
                <img
                  src={images[currentIndex]}
                  className="img-thumbnail  bg-transparent border-0 shadow-none"
                  alt="Selected"
                />
              ) : (
                <p>No image selected</p>
              )}
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGalleryWithModal;

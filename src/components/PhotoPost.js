import React from 'react';

const PhotoPost = ({ images }) => {
  return (
    <div className="container my-4">
      <div className="card mb-3">
        <div className="card-body">
          {/* Post user info and description */}
          <div className="card-text">
            <strong>User Name</strong>
            <p>Post description or caption goes here...</p>
          </div>

          {/* Image Grid */}
          <div className="row">
            {images.map((image, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                <div className="card">
                  <img
                    src={image}
                    className="card-img-top"
                    alt={`Image ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoPost;

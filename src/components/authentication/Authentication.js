import React from 'react';
import { Outlet } from "react-router-dom";




const Authentication = () => {

  return (
    <div className="container ">
      <div className="row g-4 my-5 ">
        <div className="col-lg-12 vstack gap-4">

          {/* Dynamically render TabContent based on nested routes */}
          <Outlet />

        </div>

      </div>
    </div>
  );
};

export default Authentication;

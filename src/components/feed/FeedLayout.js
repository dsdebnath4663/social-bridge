import React, { useCallback } from 'react';
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import TabHeader from './TabHeader';
import { useState, useEffect } from 'react';
import FeedLayoutRightBar from './FeedLayoutRightBar';





const FeedLayout = () => {

  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation(); // Get the current location/path
  const navigate = useNavigate();

  // Sync activeTab with the current route
  useEffect(() => {

    const currentPath = location.pathname.split("/").pop();
    setActiveTab(currentPath || "home");
  }, [location]);

  // const handleTabChange = (tab) => {
  //   setActiveTab(tab.toLowerCase());
  //   navigate(`/feed/${tab}`);
  // };
  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab.toLowerCase());
    navigate(`/feed/${tab}`);
  }, [navigate]);

  return (
    <div className="container ">
      <div className="row g-4 my-5 ">
        <div className="col-lg-8 vstack gap-4">
          <TabHeader activeTab={activeTab} onTabChange={handleTabChange} />

          {/* Dynamically render TabContent based on nested routes */}
          <Outlet />

        </div>
        <div className="col-lg-4">
          {/* <h1>Right sidebar content</h1>     */}
          <h1> {activeTab}</h1>


          <FeedLayoutRightBar />


        </div>
      </div>
    </div>
  );
};

export default FeedLayout;

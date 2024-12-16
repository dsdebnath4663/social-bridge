import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FeedPost from "./feed/FeedPost";
import FeedHeader from "./feed/FeedHeader";
import "./feed/feed.css";
import "./feed/feed-mobile.css";
import Profile from "./feed/Profile";

import FeedActivity from "./feed/FeedActivity";
import TabHeader from "./feed/TabHeader";

function Feed() {
  return (
    <main>
      <div className="container">
        <div className="row g-4 ">
          <div className="  col-lg-8">
            <TabHeader />
          </div>
          <div className="  col-lg-4">cknwe d</div>
        </div>
      </div>
    </main>
  );
}

export default Feed;

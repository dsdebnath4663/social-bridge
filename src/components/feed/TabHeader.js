import React, { memo } from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import "./feed.css";
import FeedPost from "./FeedPost";
import Profile from "./Profile";

// Memoized TabHeader component
const TabHeader = memo(({ activeTab, onTabChange }) => {
  return (
    <div>
      <div className="card feed-header">
        <img
          src="https://images.unsplash.com/photo-1542370285-b8eb8317691c?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="card-img-top mh-100 feed-bg-img-mh-100"
          alt="..."
        />
        <div className="card-body pb-0">
          <div className="d-sm-flex flex-wrap justify-content-center">
            <div className="p-2 feed-pp-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTODhj3Ap6bYRSRCMNKix7E9xY2dvdHyZPQ&amp;s"
                className="border border-white border-2 rounded-circle feed-icon-rounded-circle"
                alt="..."
              />
            </div>
            <div className="p-2">
              <h5 className="card-title fw-bolder mb-0">
                Rabiul Sk <i className="bi bi-patch-check-fill text-success small ms-1"></i>
              </h5>
              <p className="opacity-50">250 connections</p>
            </div>
            <div className="p-2 flex-grow-1 flex-align-right-top d-flex">
              <button
                type="button"
                className="btn btn-danger edit-profile-btn edit-profile-btn:hover"
              >
                <i className="bi bi-pen-fill me-2"></i> Edit Profile
              </button>
              <div className="btn-group ms-2">
                <button
                  type="button"
                  className="btn btn-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  <i className="bi bi-three-dots"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-bookmark fa-fw pe-2"></i> Share profile in a message
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-file-pdf pe-2"></i> Save your profile to PDF
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-lock pe-2"></i> Lock profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-gear pe-2"></i> Profile settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap col-lg-8">
            <div className="p-1 flex-shrink-0">
              <a className="dropdown-item" href="#">
                <i className="bi bi-briefcase me-1"></i> Lead Developer
              </a>
            </div>
            <div className="p-1 flex-shrink-0">
              <a className="dropdown-item" href="#">
                <i className="bi bi-geo-alt me-1"></i> New Hampshire
              </a>
            </div>
            <div className="p-1 flex-shrink-0">
              <a className="dropdown-item" href="#">
                <i className="bi bi-calendar-event ms-1"></i> Joined on Nov 26, 2019
              </a>
            </div>
          </div>
        </div>
        <div className="card-footer bg-transparent border-card pb-0 pt-2 mt-3">
          <ul className="nav nav-underline feed-nav-underline">
            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-semibold ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => onTabChange('home')}
                to="/feed/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-semibold ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => onTabChange('about')}
                to="/feed/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-semibold ${activeTab === 'connections' ? 'active' : ''}`}
                onClick={() => onTabChange('connections')}
                to="/feed/connections"
              >
                Connections
                <span className="badge bg-success bg-opacity-10 text-success ms-1">230</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-semibold ${activeTab === 'media' ? 'active' : ''}`}
                onClick={() => onTabChange('media')}
                to="/feed/media"
              >
                Media
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-semibold ${activeTab === 'videos' ? 'active' : ''}`}
                onClick={() => onTabChange('videos')}
                to="/feed/videos"
              >
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-semibold ${activeTab === 'events' ? 'active' : ''}`}
                onClick={() => onTabChange('events')}
                to="/feed/events"
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-3 fw-semibold"
                to="/feed/activity"
              >
                Activity
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default TabHeader;

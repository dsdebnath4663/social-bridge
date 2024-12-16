// src/DropdownTabs.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DropdownTabs = () => {
  const [activeTab, setActiveTab] = useState('home');  // Default active tab
  const [dropdownValue, setDropdownValue] = useState('Action'); // Initial dropdown label

  const handleDropdownChange = (tab) => {
    setDropdownValue(tab);  // Update dropdown value
    setActiveTab(tab.toLowerCase());  // Update the active tab based on the dropdown choice
  };

  return (
    <div className="container my-4">
      {/* Centered Dropdown Above */}
      <div className="dropdown-center mb-3 text-center">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {dropdownValue}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Home')}>
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Profile')}>
              Action two
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Contact')}>
              Action three
            </a>
          </li>
        </ul>
      </div>

      {/* Nav Tabs Below */}
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
            type="button"
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
            type="button"
          >
            Profile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
            type="button"
          >
            Contact
          </button>
        </li>
      </ul>

      {/* Tab Content Below */}
      <div className="tab-content mt-3">
        {activeTab === 'home' && (
          <div className="tab-pane fade show active p-3">
            <h3>Home Content</h3>
            <p>Welcome to the Home tab!</p>
          </div>
        )}
        {activeTab === 'profile' && (
          <div className="tab-pane fade show active p-3">
            <h3>Profile Content</h3>
            <p>Here is your profile information.</p>
          </div>
        )}
        {activeTab === 'contact' && (
          <div className="tab-pane fade show active p-3">
            <h3>Contact Content</h3>
            <p>Get in touch with us here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownTabs;

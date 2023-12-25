// NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/DashboardOverview" className="navbar-link">Dashboard</Link>
        </li>
        <li className="navbar-item">
          <Link to="/vendors" className="navbar-link">Vendor List</Link>
        </li>
        <li className="navbar-item">
          <Link to="/workflow" className="navbar-link">Workflow</Link>
        </li>
        <li className="navbar-item">
          <Link to="/reports" className="navbar-link">Reports</Link>
        </li>
        <li className="navbar-item">
          <Link to="/settings" className="navbar-link">Settings</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default NavigationBar;

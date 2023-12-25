// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo'; // Import the Logo component
import '../App.css';

function HomePage(props) {
  return (
    <div className="homepage">
      
        <Logo />
      
      <main className="main">
        <h1 className="title">OmniConnect</h1>
        <div className="options">
          <Link to="/login" className="btn-signin">
            Sign In
          </Link>
        </div>
      </main>
      <br></br>
      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
}

export default HomePage;

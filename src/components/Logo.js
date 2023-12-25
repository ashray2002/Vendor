// Logo.js

import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div >
<header className="header">
  <Link to="/" className="logo">
      VMP
    </Link>
    </header>
    </div>
  
  );
};

export default Logo;

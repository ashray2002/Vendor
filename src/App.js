import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import VendorListPage from './pages/VendorListPage';
import VendorDetailForm from './pages/VendorDetailForm';
import NavigationBar from './components/NavigationBar';
import DashboardOverview from './pages/DashboardOverview';
import PhoneVerification from './components/Auth/PhoneVerification';
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { UserAuthContextProvider } from "./components/Auth/context/UserAuthContext"; // Import the PhoneVerification component

function App() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const storedVendors = JSON.parse(localStorage.getItem('vendors')) || [];
    setVendors(storedVendors);
  }, []);

  const addVendor = (newVendor) => {
    const updatedVendors = [...vendors, newVendor];
    setVendors(updatedVendors);
    localStorage.setItem('vendors', JSON.stringify(updatedVendors));
  };

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Vendor-related routes */}
          <Route path="/vendors" element={<ProtectedRoute><VendorListPage vendors={vendors} setVendors={setVendors} /></ProtectedRoute>} />
          <Route path="/vendorform" element={<ProtectedRoute><VendorDetailForm addVendor={addVendor} /></ProtectedRoute>} />
          {/* Route for DashboardOverview */}
          <Route path="/DashboardOverview" element={<ProtectedRoute><DashboardOverview /></ProtectedRoute>} />
          {/* Route for PhoneVerification */}
          <Route path="/phone-verification" element={<ProtectedRoute><PhoneVerification /></ProtectedRoute>} />
          {/* Other routes */}
        </Routes>
        </UserAuthContextProvider>
      </div>
    </Router>
  );
}

export default App;

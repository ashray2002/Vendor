// dashboardoverview.js
import React from 'react';
import ActiveVendorsCard from '../components/MetricCards/ActiveVendorsCard';
import ContractsExpiringInOneMonthCard from '../components/MetricCards/ContractsExpiringInOneMonthCard';
import CompletedContractsCard from '../components/MetricCards/CompletedContractsCard';
import './DashboardOverview.css'; // Import CSS file for styling
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../components/Auth/context/UserAuthContext";

const DashboardOverview = () => {
  // Sample data for metrics
  const activeVendorsCount = 25;
  const contractsExpiringCount = 10; // Assuming contracts expiring count for one month
  const completedContractsCount = 100; // Assuming count of completed contracts

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h2>Dashboard Overview</h2>
        <div className="metrics">
          {/* Metrics Cards */}
          <ActiveVendorsCard count={activeVendorsCount} />
          <ContractsExpiringInOneMonthCard count={contractsExpiringCount} />
          <CompletedContractsCard count={completedContractsCount} />
          {/* Additional metrics cards */}
        </div>
        {/* Logout Button */}
        <div className="logout-button">
          {user && (
            <Button variant="primary" onClick={handleLogout}>
              Log out
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;

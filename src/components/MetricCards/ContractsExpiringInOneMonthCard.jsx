// ContractsExpiringInOneMonthCard.jsx
import React from 'react';
import './ContractsExpiringInOneMonthCard.css'; // Import CSS file for styling
import MetricCard from './MetricCard'; // Import MetricCard component

const ContractsExpiringInOneMonthCard = ({ count }) => {
  return (
    <div className="contracts-expiring-card">
      <MetricCard title="Contracts Expiring in One Month" value={count} />
      <a href="/expiring-contracts" className="quick-link">View Expiring Contracts</a>
    </div>
  );
};

export default ContractsExpiringInOneMonthCard;

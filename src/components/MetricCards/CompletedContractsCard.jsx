// CompletedContractsCard.jsx
import React from 'react';
import './CompletedContractsCard.css'; // Import CSS file for styling
import MetricCard from './MetricCard'; // Import MetricCard component

const CompletedContractsCard = ({ count }) => {
  return (
    <div className="completed-contracts-card">
      <MetricCard title="Completed Contracts" value={count} />
      <a href="/completed-contracts" className="quick-link">View Completed Contracts</a>
    </div>
  );
};

export default CompletedContractsCard;

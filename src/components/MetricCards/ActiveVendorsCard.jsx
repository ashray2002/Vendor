// ActiveVendorsCard.jsx
import React from 'react';
import './ActiveVendorsCard.css'; // Import CSS file for styling
import MetricCard from './MetricCard'; // Import MetricCard component

const ActiveVendorsCard = ({ count }) => {
  return (
    <div className="active-vendors-card">
      <MetricCard title="Active Vendors" value={count} />
      <a href="/vendor-list" className="quick-link">Go to Vendor List</a>
    </div>
  );
};

export default ActiveVendorsCard;

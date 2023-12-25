import React, { useState } from 'react';
import './VendorDetailForm.css'; // Import CSS file for styling

const VendorDetailForm = ({ addVendor }) => {
  const [vendorData, setVendorData] = useState({
    name: '',
    clientCompanyLogo: null,
    location: '',
    status: '',
    expirationDate: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = e.target.files[0];
      setVendorData({ ...vendorData, [name]: file });
    } else {
      setVendorData({ ...vendorData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vendorData.name && vendorData.location && vendorData.status && vendorData.expirationDate) {
      addVendor(vendorData);
      setVendorData({
        name: '',
        clientCompanyLogo: null,
        location: '',
        status: '',
        expirationDate: '',
      });
    } else {
      alert('Please fill in all required fields');
    }
  };

  const getStatusColor = () => {
    switch (vendorData.status) {
      case 'Active':
        return 'blue';
      case 'Completed':
        return 'green';
      case 'Cancelled':
        return 'red';
      case 'On Hold':
        return 'yellow';
      default:
        return 'black';
    }
  };

  return (
    <div className="vendor-form-container">
      <h2>Vendor Detail Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={vendorData.name}
          onChange={handleChange}
          placeholder="Vendor Name"
          required
        />
        {/* Uploadable Image Field for Client Company Logo */}
        <input
          type="file"
          accept="image/jpeg, image/png"
          name="clientCompanyLogo"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          value={vendorData.location}
          onChange={handleChange}
          placeholder="Location"
          required
        />
        {/* Dropdown for Status */}
        <select name="status" value={vendorData.status} onChange={handleChange} required>
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
          <option value="On Hold">On Hold</option>
        </select>
        {/* Calendar for Expiration Date */}
        <input
          type="date"
          name="expirationDate"
          value={vendorData.expirationDate}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ color: getStatusColor() }}>Add Vendor</button>
      </form>
    </div>
  );
};

export default VendorDetailForm;

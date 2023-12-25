import React, { useState, useEffect } from 'react';
import './VendorListPage.css';
import { Link } from 'react-router-dom';
import { getVendors, deleteVendor } from '../services/api'; // Import the API functions

const VendorListPage = ({ setVendors }) => {
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Call the API function to fetch vendors
    getVendors().then((data) => {
      setFilteredVendors(data);
      setVendors(data); // Assuming setVendors updates the vendors state in parent component
    });
  }, [setVendors]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = filteredVendors.filter(
      (vendor) =>
        vendor.name.toLowerCase().includes(term) ||
        vendor.contactInfo.toLowerCase().includes(term) ||
        vendor.services.toLowerCase().includes(term) ||
        vendor.summary.toLowerCase().includes(term)
    );
    setFilteredVendors(filtered);
  };

  const handleDelete = (id) => {
    // Call the API function to delete the vendor by ID
    deleteVendor(id).then(() => {
      const updatedFilteredVendors = filteredVendors.filter((vendor) => vendor.id !== id);
      const updatedMainVendors = filteredVendors.filter((vendor) => vendor.id !== id);

      setFilteredVendors(updatedFilteredVendors);
      setVendors(updatedMainVendors);
      localStorage.setItem('vendors', JSON.stringify(updatedMainVendors));
    });
  };

  return (
    <div className="vendor-list-container">
      <h2>Vendors ({filteredVendors.length})</h2>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name, contact info, services, or summary"
          onChange={handleSearch}
          value={searchTerm}
        />

        {/* Add Vendor button */}
        <Link to="/vendorform" className="add-vendor-btn">
          Add Vendor
        </Link>
      </div>

      <table>
        {/* Table headers */}
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Client Company Logo</th>
            <th>Location</th>
            <th>Status</th>
            <th>Expiration Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render filtered vendors */}
          {filteredVendors.map((vendor) => (
            <tr key={vendor.id} className="vendor-item">
              {/* Vendor information */}
              <td>{vendor.name}</td>
              <td>
                <img src={vendor.clientCompanyLogo} alt="Client Logo" />
              </td>
              <td>{vendor.location}</td>
              <td>{vendor.status}</td>
              <td>{vendor.expirationDate}</td>
              <td>
                {/* View link */}
                <Link to={`/vendors/${vendor.id}`} className="view-link">
                  View
                </Link>
                <button onClick={() => handleDelete(vendor.id)} className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorListPage;

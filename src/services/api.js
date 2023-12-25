// Simulated vendors data
let vendors = [
  { id: 1, name: 'Vendor 1', clientCompanyLogo: 'logo1.jpg', location: 'Location 1', status: 'Active', expirationDate: '2023-12-31' },
  { id: 2, name: 'Vendor 2', clientCompanyLogo: 'logo2.jpg', location: 'Location 2', status: 'Completed', expirationDate: '2023-11-30' },
  // More vendor objects...
];

const generateUniqueID = () => {
  // Generate a unique ID (You may have a different implementation)
  return Date.now();
};

export const getVendors = async () => {
  // Implement API call to fetch vendors
  // Return mock data for demonstration
  return vendors;
};

export const deleteVendor = async (vendorId) => {
  // Implement API call to delete vendor by ID
  vendors = vendors.filter((vendor) => vendor.id !== vendorId);
};

export const addVendor = async (newVendor) => {
  // Implement API call to add a vendor
  // Return mock data for demonstration

  // Generate a unique ID for the new vendor
  const newVendorWithID = {
    id: generateUniqueID(),
    ...newVendor,
  };

  vendors.push(newVendorWithID);
  return newVendorWithID;
};

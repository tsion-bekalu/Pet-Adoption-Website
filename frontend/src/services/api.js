const API_BASE_URL = '/api';

// Helper function for making API requests
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'An error occurred');
    }
    
    return data;
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
}

// Pets API
export const petsAPI = {
  // Get all pets with optional filters
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return fetchAPI(`/pets${queryString ? `?${queryString}` : ''}`);
  },

  // Get single pet by ID
  getById: (id) => {
    return fetchAPI(`/pets/${id}`);
  },

  // Submit adoption application
  submitAdoption: (applicationData) => {
    return fetchAPI('/pets/adopt', {
      method: 'POST',
      body: JSON.stringify(applicationData),
    });
  },
};

// Contact API
export const contactAPI = {
  // Get contact information
  getInfo: () => {
    return fetchAPI('/contact/info');
  },

  // Submit contact form
  submit: (formData) => {
    return fetchAPI('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },
};

// Volunteer API
export const volunteerAPI = {
  // Get volunteer opportunities
  getOpportunities: () => {
    return fetchAPI('/volunteer/opportunities');
  },

  // Get volunteer requirements
  getRequirements: () => {
    return fetchAPI('/volunteer/requirements');
  },

  // Submit volunteer application
  apply: (applicationData) => {
    return fetchAPI('/volunteer/apply', {
      method: 'POST',
      body: JSON.stringify(applicationData),
    });
  },
};

export default {
  pets: petsAPI,
  contact: contactAPI,
  volunteer: volunteerAPI,
};

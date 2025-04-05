

// const BASE_URL = 'https://your-backend-api-url.com';  

// const BASE_URL ='http://127.0.0.1:8000';
const BASE_URL = 'https://backend.asha.education'; // Replace with your actual backend UR

// Create a reusable API utility function for fetching data
export const fetchData = async (endpoint) => {
    const url =`${BASE_URL}${endpoint}`
    try {
      const response = await fetch(url, {    
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: "no-store",
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw to handle in the calling function
    }
  };




// all api calls here 
export const UniversityFetch = async () => {
    return fetchData(`/universities/university`);
  }; 

export const fetchUniversityById = async (id) => {
    return fetchData(`/universities/university/${id}/`);
};

export const ProsConsById = async (id) => {
  return fetchData(`/universities/university-pros-cons/${id}/`);
};

export const ProgramFetch = async () => {
    return fetchData(`/universities/programs`);
  };

export const TestimonialFetch = async () => {
    return fetchData(`/about/testimonials`);
  };

export const AboutusFetch = async () => {
    return fetchData(`/about/about-us`);
  };

export const SpecializationFetch = async () => {
    return fetchData(`/universities/specializations`);
  };

export const TypeFetch = async () => {
    return fetchData(`/universities/program-types`);
  };


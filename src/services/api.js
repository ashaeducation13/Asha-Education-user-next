

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

  export const ProgramFetchById = async (id) => {
    return fetchData(`/universities/programs/${id}/`);
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



  export const submitCounselForm = async (formData) => {
    const url = `${BASE_URL}/about/enquire/`; // ⬅️ Replace with the actual endpoint
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };
  

  export const contactForm = async (formData) => {
    const url = `${BASE_URL}/about/contact/`; // ⬅️ Replace with the actual endpoint
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };
  

  export const sendOtp = async (formData) => {
    const url = `${BASE_URL}/contact/send-otp/`; 
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };


  export const verifyOtp = async (formData) => {
    const url = `${BASE_URL}/contact/verify-otp/`; 
    console.log("inner",formData);
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };
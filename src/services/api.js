

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

  export const ProgramFetchById = async (slug) => {
    return fetchData(`/universities/programs/${slug}/`);
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

export const JobFetch = async () => {
    return fetchData(`/career/jobs`);
  };

export const ExoppFetch = async () => {
    return fetchData(`/career/exclusive-opportunities`);
  };



export const submitCounselForm = async (formData) => {
    const url = `${BASE_URL}/about/general-enquiry/`; 
  
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
    const url = `${BASE_URL}/about/contact/`; 
  
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


  export const subscribeToNewsletter = async (formData) => {
    const url = `${BASE_URL}/about/subscribe/`; 
  
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

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (!response.ok) {
    // Don't throw, just return structured error
    return {
      success: false,
      error: result?.details?.message || result?.message || 'OTP verification failed',
    };
  }

  return { success: true, data: result };
};

export const ResendOtp = async (formData) => {
  const url = `${BASE_URL}/contact/resend-otp/`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (!response.ok) {
    // Don't throw, just return structured error
    return {
      success: false,
      error: result?.details?.message || result?.message || 'OTP verification failed',
    };
  }

  return { success: true, data: result };
};




  // about/referral/


  export const referForm = async (formData) => {
    const url = `${BASE_URL}/about/referral/`; 
  
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




// career/jobs
export const Jobapply = async (formData) => {
  const url = `${BASE_URL}/career/apply/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData, // send FormData directly
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

export const ExecutiveApply = async (formData) => {
  const url = `${BASE_URL}/career/apply-exclusive/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData, // send FormData directly
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

export const BePartofUs = async (formData) => {
  const url = `${BASE_URL}/career/be-part-of-us/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
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
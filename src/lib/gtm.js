export const trackFormSubmit = (formName, additionalData = {}) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "form_submit",
      formName,
      ...additionalData,
    });
  }
};

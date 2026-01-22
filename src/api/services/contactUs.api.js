import axiosInstance from "../axiosInstance.js";

export const getBudget = async () => {
  const { data } = await axiosInstance.get("/api/budget-ranges");
  return data;
};
export const sendOffer = async (data) => {
  const response = await axiosInstance.post("/api/quote-requests", {
    full_name: data.fullName,
    company_name: data.companyName,
    phone: data.phone,
    email: data.email,
    service_type: data.serviceType,
    budget_range: data.budgetRange,
    project_description: data.projectDescription,
  });
  return response.data;
};

export const sendMessage = async (data) => {
  const response = await axiosInstance.post("/api/contact-messages", {
    full_name: data.fullName,
    email: data.email,
    message: data.message,
    phone: data.phone,
  });
  return response.data;
};

export const getContactData = async () => {
  const { data } = await axiosInstance.get("/api/contact-info");
  return data;
};
export const EnterEmail = async (email) => {
  const { data } = await axiosInstance.post("/api/newsletter/subscribe", {
    email,
  });
  return data;
};

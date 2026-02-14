import axiosInstance from "../axiosInstance.js";

export const getIslandData = async () => {
  const response = await axiosInstance.get("/api/island");

  return response.data;
};

export const getClientsData = async () => {
  const response = await axiosInstance.get("/api/clients");
  return response.data;
};

export const getReviewsData = async () => {
  const response = await axiosInstance.get("/api/reviews");
  return response.data;
};

export const getSettingsData = async () => {
  const response = await axiosInstance.get("/api/settings");
  return response.data;
};

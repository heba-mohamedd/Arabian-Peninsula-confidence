import axiosInstance from "../axiosInstance.js";

export const getSystemIntegrationData = async () => {
  const response = await axiosInstance.get("/api/integration-services");

  return response.data;
};

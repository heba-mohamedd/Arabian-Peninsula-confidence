import axiosInstance from "../axiosInstance.js";

export const getIslandData = async () => {
  const response = await axiosInstance.get("/api/island");

  return response.data;
};

export const getClientsData = async () => {
  const response = await axiosInstance.get("/api/clients");
  return response.data;
};

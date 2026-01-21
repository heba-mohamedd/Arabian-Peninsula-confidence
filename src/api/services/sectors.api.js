import axiosInstance from "../axiosInstance.js";

export const getAllSectors = async () => {
  const response = await axiosInstance.get("/api/sectors");
  return response.data;
};

export const getSectorById = async (id) => {
  const response = await axiosInstance.get(`/api/sectors/${id}`);
  return response.data;
};

export const getHowWeWorkData = async () => {
  const response = await axiosInstance.get(`/api/work-methods`);
  return response.data;
};

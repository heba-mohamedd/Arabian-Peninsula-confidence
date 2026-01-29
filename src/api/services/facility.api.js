import axiosInstance from "../axiosInstance.js";

export const getFacilityData = async () => {
  const response = await axiosInstance.get("/api/services");

  return response.data;
};

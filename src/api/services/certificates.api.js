import axiosInstance from "../axiosInstance.js";

export const getCertificatesData = async () => {
  const response = await axiosInstance.get("/api/certificates");
  return response.data;
};

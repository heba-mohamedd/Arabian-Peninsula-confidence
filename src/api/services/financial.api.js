import axiosInstance from "../axiosInstance.js";

export const getFinancialData = async () => {
  const response = await axiosInstance.get("/api/financial-services");

  return response.data;
};

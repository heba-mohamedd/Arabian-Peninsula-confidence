import axiosInstance from "../axiosInstance.js";

export const getAboutAsData = async () => {
  const response = await axiosInstance.get("/api/about-us");
  return response.data;
};

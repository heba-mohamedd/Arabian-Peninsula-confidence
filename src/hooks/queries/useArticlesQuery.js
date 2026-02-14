import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";

export const getArticles = async () => {
  const response = await axiosInstance.get("/api/articles");
  return response.data;
};

export default function useArticlesQuery() {
  return useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });
}

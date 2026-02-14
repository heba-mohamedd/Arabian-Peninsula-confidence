import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance.js";

export const getArticleById = async (id) => {
  const response = await axiosInstance.get(`/api/articles/${id}`);
  return response.data;
};

export default function useArticleByIdQuery(id) {
  return useQuery({
    queryKey: ["article", id],
    queryFn: () => getArticleById(id),
    enabled: !!id,
  });
}

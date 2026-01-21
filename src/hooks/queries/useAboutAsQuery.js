import { useQuery } from "@tanstack/react-query";
import { getAboutAsData } from "../../api/services/aboutAs.api.js";

export const useAboutAsQuery = () => {
  return useQuery({
    queryKey: ["about-as"],
    queryFn: getAboutAsData,
  });
};

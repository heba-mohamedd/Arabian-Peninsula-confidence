import { useQuery } from "@tanstack/react-query";
import { getIslandData } from "../../api/services/home.api";

export const useIslandQuery = () => {
  return useQuery({
    queryKey: ["island"],
    queryFn: getIslandData,
  });
};

import { useQuery } from "@tanstack/react-query";
import { getSectorById } from "../../../api/services/sectors.api.js";

export const useSectorById = (id) => {
  return useQuery({
    queryKey: ["sector", id],
    queryFn: () => getSectorById(id),
    enabled: !!id,
  });
};

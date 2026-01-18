import { useQuery } from "@tanstack/react-query";
import { getAllSectors } from "../../../api/services/sectors.api.js";

export default function useSectorsQuery() {
  return useQuery({
    queryKey: ["sectors"],
    queryFn: getAllSectors,
  });
}

import { useQuery } from "@tanstack/react-query";
import { getClientsData } from "../../api/services/home.api.js";

export function useClientsQuery() {
  return useQuery({
    queryKey: ["clients"],
    queryFn: getClientsData,
  });
}

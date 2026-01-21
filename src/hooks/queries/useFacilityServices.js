import { useQuery } from "@tanstack/react-query";
import { getFacilityData } from "../../api/services/facility.api.js";

export const useFacilityServicesQuery = () => {
  return useQuery({
    queryKey: ["facility-services"],
    queryFn: getFacilityData,
  });
};

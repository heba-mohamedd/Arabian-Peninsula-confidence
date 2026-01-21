import { useQuery } from "@tanstack/react-query";
import { getSystemIntegrationData } from "../../api/services/systemIntegration.api.js";

export const useSystemIntegrationQuery = () => {
  return useQuery({
    queryKey: ["system-integration"],
    queryFn: getSystemIntegrationData,
  });
};

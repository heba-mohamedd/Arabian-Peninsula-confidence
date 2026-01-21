import { useQuery } from "@tanstack/react-query";
import { getFinancialData } from "../../api/services/financial.api.js";

export const useFinancialQuery = () => {
  return useQuery({
    queryKey: ["financial"],
    queryFn: getFinancialData,
  });
};

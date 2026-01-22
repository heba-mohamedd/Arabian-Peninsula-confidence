import { useQuery } from "@tanstack/react-query";
import { getBudget } from "../../api/services/contactUs.api.js";

export function useBudgetQuery() {
  return useQuery({
    queryKey: ["budget-data"],
    queryFn: getBudget,
  });
}

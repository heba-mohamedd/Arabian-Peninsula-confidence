import { useQuery } from "@tanstack/react-query";
import { getHowWeWorkData } from "../../../api/services/sectors.api.js";

export default function useHowWeWorkQuery() {
  return useQuery({
    queryKey: ["how-we-work"],
    queryFn: getHowWeWorkData,
  });
}

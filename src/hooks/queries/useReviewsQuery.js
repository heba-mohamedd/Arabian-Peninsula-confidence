import { useQuery } from "@tanstack/react-query";
import { getReviewsData } from "../../api/services/home.api.js";

export function useReviewsQuery() {
    return useQuery({
        queryKey: ["reviews"],
        queryFn: getReviewsData,
    });
}

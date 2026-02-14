import { useQuery } from "@tanstack/react-query";
import { getSettingsData } from "../../api/services/home.api.js";

export function useSettingsQuery() {
    return useQuery({
        queryKey: ["settings"],
        queryFn: getSettingsData,
        staleTime: 1000 * 60 * 5, // Cache settings for 5 minutes
    });
}

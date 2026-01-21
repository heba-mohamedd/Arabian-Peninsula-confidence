import { useQuery } from "@tanstack/react-query";
import { getContactData } from "../../api/services/contactUs.api.js";

export const useContactData = () => {
  return useQuery({
    queryKey: ["contact-inform-data"],
    queryFn: getContactData,
  });
};

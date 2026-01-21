import { useMutation } from "@tanstack/react-query";
import { EnterEmail } from "./../../api/services/contactUs.api.js";

export const useEnterEmailQuery = () => {
  return useMutation({
    mutationFn: (email) => EnterEmail(email),
  });
};

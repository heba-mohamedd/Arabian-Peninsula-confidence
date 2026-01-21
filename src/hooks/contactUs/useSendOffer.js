import { useMutation } from "@tanstack/react-query";
import { sendOffer } from "../../api/services/contactUs.api.js";

export const useSendOffer = () => {
  return useMutation({
    mutationFn: (data) => sendOffer(data),
  });
};

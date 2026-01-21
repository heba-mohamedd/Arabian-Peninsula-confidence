import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "../../api/services/contactUs.api.js";

export const useSendMessage = () => {
  return useMutation({
    mutationFn: (data) => sendMessage(data),
  });
};

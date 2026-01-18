import { useQuery } from "@tanstack/react-query";
import { getCertificatesData } from "./../../api/services/certificates.api";

export function useCertificatesQuery() {
  return useQuery({
    queryKey: ["certificates"],
    queryFn: getCertificatesData,
  });
}

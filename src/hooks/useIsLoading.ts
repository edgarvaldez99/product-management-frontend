import { useIsFetching } from "@tanstack/react-query";

export default function useIsLoading() {
  const fechingNumber = useIsFetching();
  return fechingNumber !== 0;
}

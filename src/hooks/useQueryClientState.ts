import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useSnackbar } from "./contexts";

export default function useQueryClientState() {
  const { setOpenSnackbar } = useSnackbar();
  const queryCache = new QueryCache({
    onError: (error) => {
      setOpenSnackbar(error as string, "error");
    },
  });
  const mutationCache = new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      if (mutation.options.onSuccess) return;
      setOpenSnackbar("Realizado Satisfactoriamente");
    },
    onError: (error, _variables, _context, mutation) => {
      if (mutation.options.onError) return;
      setOpenSnackbar(error as string, "error");
    },
  });

  const [queryClient] = useState(
    () => new QueryClient({ queryCache, mutationCache }),
  );
  return queryClient;
}

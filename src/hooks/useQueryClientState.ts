import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function useQueryClientState() {
  const queryCache = new QueryCache({
    onError: (error, query) => {
      // Only show error toasts if we already have data in the cache
      // which indicates a failed background update
      if (query.state.data !== undefined) {
        console.error(error);
      }
    },
  });
  const mutationCache = new MutationCache({
    onError: (error, _variables, _context, mutation) => {
      // If this mutation has an onError defined, skip this
      if (mutation.options.onError) return;

      // any error handling code...
      console.error(error);
    },
  });

  const [queryClient] = useState(
    () => new QueryClient({ queryCache, mutationCache }),
  );
  return queryClient;
}

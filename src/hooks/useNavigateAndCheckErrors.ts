import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useNavigateAndCheckError(to: string) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const goToPage = useCallback(() => {
    setIsLoading(true);
    try {
      navigate(to);
    } finally {
      setIsLoading(false);
    }
  }, [to]);
  return { goToPage, isLoadingNextPage: isLoading };
}

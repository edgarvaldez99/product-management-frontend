/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { ListRequest } from "src/interfaces/request";

type UseListResult<TData = unknown, TError = unknown> = UseQueryResult<
  TData,
  TError
> & {
  filters: any;
  setFilters: (event: any) => void;
};

type UseListProps<T> = {
  listKey: string;
  getListFn: (req: ListRequest) => Promise<T>;
};

export default function useList<T>({
  listKey,
  getListFn,
}: UseListProps<T>): UseListResult<T | undefined> {
  const [filters, setFilters] = useState<any>({});
  const getList = useCallback(() => {
    return getListFn({ params: filters });
  }, [filters]);

  const query = useQuery<T>({
    queryKey: [listKey, filters],
    queryFn: getList,
  });
  return {
    ...query,
    filters,
    setFilters,
  };
}

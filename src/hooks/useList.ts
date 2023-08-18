import { GridColDef } from "@mui/x-data-grid";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { ChangeEvent, useCallback } from "react";
import { ListRequest } from "src/interfaces/request";
import useFilterRequestParams from "./useFilterRequestParams";

type UseListResult<TData = unknown, TError = unknown> = UseQueryResult<
  TData,
  TError
> & {
  setFilter: (event: ChangeEvent<HTMLInputElement>) => void;
};

type UseListProps<T> = {
  listKey: string;
  getListFn: (req: ListRequest) => Promise<T>;
  columnDef: GridColDef[];
};

export default function useList<T>({
  listKey,
  getListFn,
  columnDef,
}: UseListProps<T>): UseListResult<T | undefined> {
  const {
    filters,
    setFilter,
  } = useFilterRequestParams(columnDef);
  const getList = useCallback(() => {
    return getListFn({ params: filters });
  }, [filters]);

  const query = useQuery<T>({
    queryKey: [listKey, filters],
    queryFn: getList,
  });
  return {
    ...query,
    setFilter,
  };
}

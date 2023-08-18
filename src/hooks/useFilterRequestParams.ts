import {
  GridColDef,
} from "@mui/x-data-grid";
import { ChangeEvent, useState } from "react";

export default function useFilterRequestParams(columns: GridColDef[]) {
  const [filters, setFilters] = useState<Record<string, string>>({});

  const setFilter = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!value) {
      return setFilters({});
    }
    let filtros: Record<string, string> = {};
    columns.forEach(({ field, filterable }) => {
      if (!filterable) {
        return;
      }
      filtros = {
        ...filtros,
        [field]: value
      };
    });
    setFilters(filtros);
  };

  return {
    filters,
    setFilter,
  };
}

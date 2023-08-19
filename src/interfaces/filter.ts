import { GridPaginationModel, GridSortItem } from "@mui/x-data-grid";
import { FilterConditions, FilterTypes } from "src/enums/filter";

export type FilterType =
  | string
  | "string"
  | "number"
  | "date"
  | "dateTime"
  | "boolean";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FilterValue = Array<any> | string | boolean | Date | number;

export interface FilterItem {
  key: string; // nombre de columna o path (separado por puntos) que se desea, ejemplo filtrar user -> rol -> permiso -> codigo  = rol.permiso.codigo = 'VER_USER'
  value: FilterValue; // Valor a filtrar
  condition?: FilterConditions;
  type?: FilterType;
}

export interface ConditionItem {
  type: FilterTypes;
  value: FilterValue;
}

export interface ConditionGroup {
  condition: FilterConditions;
  comparingObjects: ConditionItem[];
  comparingObject: FilterValue | null;
  type: FilterTypes;
}

export interface FilterSetting {
  pagination: GridPaginationModel;
  filters: FilterItem[];
  sortings: GridSortItem[];
}

export interface FilterSettingParams extends FilterSetting {
  columns: string[];
}

export interface FilterRequest {
  path: string;
  conditions: ConditionGroup[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  booleanJoins: any[];
}

export interface FilterRequestParams {
  filter: string;
  page: number;
  pageSize: number;
  sorting: string;
}

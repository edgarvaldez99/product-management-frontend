import {
  GridColDef
} from "@mui/x-data-grid";

export default function UnregisteredProductColumnDef(): GridColDef[] {
  return [
    {
      field: "name",
      headerName: "Nombre del Producto",
      flex: 1,
      minWidth: 200,
      filterable: true,
      sortable: true,
    },
    {
      field: "status",
      headerName: "Estado",
      flex: 1,
      minWidth: 200,
      filterable: true,
      sortable: true,
    },
  ];
}

import { GridColDef } from "@mui/x-data-grid";

export default function UserColumnDef(): GridColDef[] {
  return [
    {
      field: "id",
      headerName: "ID",
      flex: 0.8,
      minWidth: 200,
      filterable: false,
    },
    {
      field: "username",
      headerName: "Username",
      flex: 0.5,
      minWidth: 200,
      maxWidth: 250,
      filterable: false,
    },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 0.5,
      minWidth: 200,
      maxWidth: 250,
      filterable: false,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 0.5,
      minWidth: 200,
      maxWidth: 250,
      filterable: false,
    },
    {
      field: "email",
      headerName: "E-mail",
      flex: 0.5,
      minWidth: 200,
      maxWidth: 250,
      filterable: false,
    },
    {
      field: "isActive",
      headerName: "Is active",
      flex: 0.5,
      minWidth: 200,
      maxWidth: 250,
      filterable: false,
    },
  ];
}

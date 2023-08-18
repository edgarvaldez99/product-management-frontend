import { DataGrid, DataGridProps } from "@mui/x-data-grid";

export default function Table(props: DataGridProps) {
  return (
    <div
      style={{
        maxHeight: "calc(100vh - 117px)",
        height: "auto",
        width: "100%",
      }}
    >
      <DataGrid
        disableColumnSelector={true}
        isRowSelectable={() => false}
        {...props}
      />
    </div>
  );
}

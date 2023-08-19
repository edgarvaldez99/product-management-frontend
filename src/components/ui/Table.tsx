import { Box } from "@mui/system";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { DRAWER_WIDTH } from "src/constants";
import useIsMobileScreen from "src/hooks/useIsMobileScreen";

export default function Table(props: DataGridProps) {
  const isMobile = useIsMobileScreen();
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        disableColumnFilter
        disableColumnSelector
        isRowSelectable={() => false}
        sx={{
          backgroundColor: "white",
          "& .MuiDataGrid-main": {
            overflow: "auto",
            width: isMobile
              ? "calc(100vw - 66px)"
              : `calc(100vw - ${DRAWER_WIDTH + 66}px)`,
          },
          "& .MuiDataGrid-columnHeader": {
            color: "#455a64",
            fontWeight: 500,
          },
        }}
        {...props}
      />
    </Box>
  );
}

import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";

export default function Content() {
  const style = {
    backgroundColor: "#F1F1F1",
    padding: "0 2rem",
    width: "100%",
    height: "calc(100vh - 64px)",
  };
  return (
    <Box component="main" sx={style}>
      <Outlet />
    </Box>
  );
}

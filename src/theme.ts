import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#00d4ff",
      main: "#146a90",
      dark: "#020024",
      contrastText: "#fff",
    },
    secondary: {
      light: "#e6e6e6",
      main: "#e0e0e0",
      dark: "#9c9c9c",
      contrastText: "#000",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

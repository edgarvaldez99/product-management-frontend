import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#6FA0CC",
      main: "#3F51B5",
      dark: "#303F9F",
      contrastText: "#C5CAE9",
    },
    secondary: {
      light: "#6FBB62",
      main: "#4CAF50",
      dark: "#235B55",
      contrastText: "#212121",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

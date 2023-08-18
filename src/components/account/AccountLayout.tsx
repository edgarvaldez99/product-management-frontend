import { Box, Container, CssBaseline } from "@mui/material";
import AccountTitle from "src/components/account/AccountTitle";
import classes from "./Account.module.css";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function AccountLayout({ children, title }: Props) {
  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AccountTitle title={title} />
          {children}
        </Box>
      </Container>
    </div>
  );
}

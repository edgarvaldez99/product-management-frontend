import { AppBar, Button, Toolbar } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from "src/contexts/AuthUserContext";
import HeaderMenuList from "./HeaderMenuList";

export default function Header() {
  const { user: authenticatedUser } = useContext(AuthUserContext);
  return (
    <AppBar>
      <Toolbar>
        <div>
          {!authenticatedUser ? (
            <Link to="/login">
              <Button variant="contained">
                INGRESAR
              </Button>
            </Link>
          ) : (
            <HeaderMenuList authenticatedUser={authenticatedUser} />
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

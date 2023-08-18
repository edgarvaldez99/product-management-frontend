import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthUserContext } from "src/hooks/contexts";
import HeaderMenuList from "./HeaderMenuList";

export default function Header() {
  const { user: authenticatedUser } = useAuthUserContext();
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

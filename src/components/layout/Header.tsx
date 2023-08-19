import { AppBar, Button, Toolbar } from "@mui/material";
import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useAuthUserContext } from "src/hooks/contexts";
import MenuIconButton from "../ui/MenuIconButton";
import ElevationScroll from "./ElevationScroll";
import classes from "./Header.module.css";
import HeaderMenuList from "./HeaderMenuList";

type HeaderProps = {
  isMobile: boolean;
  onMenuClick: (event: MouseEvent) => void;
};

export default function Header({ isMobile, onMenuClick }: HeaderProps) {
  const { user: authenticatedUser } = useAuthUserContext();
  return (
    <div>
      <ElevationScroll>
        <AppBar className={classes.header}>
          <Toolbar>
            {isMobile && <MenuIconButton onClick={onMenuClick} />}
            <div className={classes.buttonLogin}>
              {!authenticatedUser ? (
                <Link to="/login">
                  <Button className={classes.btn} variant="contained">
                    INGRESAR
                  </Button>
                </Link>
              ) : (
                <HeaderMenuList
                  isMobile={isMobile}
                  authenticatedUser={authenticatedUser}
                />
              )}
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div style={{ height: "64px" }}></div>
    </div>
  );
}

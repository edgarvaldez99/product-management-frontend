import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import { useAuthUserContext } from "src/hooks/contexts";
import useNavigateAndCheckError from "src/hooks/useNavigateAndCheckErrors";
import { User } from "src/interfaces/user";
import { getUserLabel } from "src/utils/user-label";
import classes from "./Header.module.css";

type HeaderMenuListProps = {
  isMobile: boolean;
  authenticatedUser: User;
};

export default function HeaderMenuList({
  isMobile,
  authenticatedUser,
}: HeaderMenuListProps) {
  const { goToPage: goToLoginPage } = useNavigateAndCheckError("/login");
  const { logout } = useAuthUserContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const userLabel = useMemo(
    () => getUserLabel(authenticatedUser),
    [authenticatedUser],
  );

  function handleMenuClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = useCallback(() => {
    setAnchorEl(null);
    logout();
    goToLoginPage();
  }, [logout, goToLoginPage]);

  return (
    <>
      <Button
        className={classes.btn}
        variant="contained"
        aria-controls="header-menu-list"
        aria-haspopup="true"
        onClick={handleMenuClick}
      >
        {!isMobile && <span className={classes.btnLabel}>{userLabel}</span>}
        <Avatar />
      </Button>
      <Menu
        id="header-menu-list"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
      </Menu>
    </>
  );
}

import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useAuthUserContext } from "src/hooks/contexts";
import { User } from "src/interfaces/user";
// import AuthService from "src/services/auth.service";

type HeaderMenuListProps = {
  authenticatedUser: User;
};

export default function HeaderMenuList({
  authenticatedUser,
}: HeaderMenuListProps) {
  const { logout } = useAuthUserContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logout();
    // AuthService.logout();
  };

  return (
    <>
      <Button
        variant="contained"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {authenticatedUser.first_name}
        <Avatar />
      </Button>
      <Menu
        style={{ position: "fixed", marginTop: "45px" }}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
      </Menu>
    </>
  );
}

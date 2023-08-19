import { Drawer, DrawerProps } from "@mui/material";

type SidenavStyledProps = DrawerProps & { isMobile: boolean; width: number };

const SidenavStyled = ({
  isMobile,
  width,
  children,
  ...props
}: SidenavStyledProps) => (
  <Drawer
    anchor="left"
    sx={{
      display: { xs: "block" },
      position: "relative",
      "& .MuiDrawer-paper": {
        position: isMobile ? "absolute" : "static",
        boxSizing: "border-box",
        height: "calc(100vh - 64px)",
        overflowX: "hidden",
        width,
      },
    }}
    variant="permanent"
    {...props}
  >
    {children}
  </Drawer>
);

export default SidenavStyled;

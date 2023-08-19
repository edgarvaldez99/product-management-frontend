 
import MenuList from "src/components/layout/sidenav/MenuList";
import SidenavStyled from "./SidenavStyled";

type SideNavProps = {
  open: boolean;
  isMobile: boolean;
  drawerWidth: number;
  toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void;
  windowProp?: () => Window;
};

export default function Sidenav({
  open,
  isMobile,
  drawerWidth,
  toggleDrawer,
  windowProp,
}: SideNavProps) {
  const window = windowProp;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <SidenavStyled
      open={open}
      isMobile={isMobile}
      onClose={toggleDrawer}
      container={container}
      width={drawerWidth}
    >
      <MenuList
        sx={{ width: drawerWidth - 1 }}
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      />
    </SidenavStyled>
  );
}

import { DRAWER_WIDTH } from "src/constants";
import Content from "./Content";
import Header from "./Header";
import Sidenav from "./sidenav/Sidenav";
import { useLayout } from "./sidenav/useLayout";

export default function Layout() {
  const { drawerWidth, isMobile, openMenu, toggleDrawer } =
    useLayout(DRAWER_WIDTH);
  return (
    <>
      <Header isMobile={isMobile} onMenuClick={toggleDrawer} />
      <div style={{ display: "flex" }}>
        <Sidenav
          isMobile={isMobile}
          drawerWidth={drawerWidth}
          open={openMenu}
          toggleDrawer={toggleDrawer}
        />
        <Content />
      </div>
    </>
  );
}

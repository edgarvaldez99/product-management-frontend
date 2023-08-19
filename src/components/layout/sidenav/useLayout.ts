import { useEffect, useState } from "react";
import useIsMobileScreen from "src/hooks/useIsMobileScreen";

export function useLayout(defaultDrawerWidth: number) {
  const isMobile = useIsMobileScreen();
  const [drawerWidth, setDrawerWidth] = useState<number>(
    isMobile ? 0 : defaultDrawerWidth,
  );
  const [openMenu, setOpenMenu] = useState<boolean>(!isMobile);
  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    const isOpen = isMobile ? !openMenu : true;
    setOpenMenu(isOpen);
    setDrawerWidth(isOpen ? defaultDrawerWidth : 0);
  };

  useEffect(() => {
    setOpenMenu(!isMobile);
    setDrawerWidth(isMobile ? 0 : defaultDrawerWidth);
  }, [isMobile, defaultDrawerWidth]);
  return { drawerWidth, openMenu, isMobile, toggleDrawer };
}

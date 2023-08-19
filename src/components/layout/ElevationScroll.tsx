import { AppBarProps, useScrollTrigger } from "@mui/material";
import React from "react";

type ElevationScrollProps = {
  children: React.ReactElement<AppBarProps>;
};

export default function ElevationScroll({ children }: ElevationScrollProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

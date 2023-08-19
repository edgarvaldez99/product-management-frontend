import { IconButton, IconButtonProps } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuIconButton({ onClick, ...props }: IconButtonProps) {
  return (
    <IconButton
      size="large"
      edge="start"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={onClick}
      {...props}
    >
      <MenuIcon />
    </IconButton>
  );
}

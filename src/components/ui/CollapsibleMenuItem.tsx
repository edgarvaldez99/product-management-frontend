import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import { MouseEvent, ReactNode, useState } from "react";

type CollapsibleMenuItem = {
  children: ReactNode;
  text: string;
  isNested?: boolean;
};

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export default function CollapsibleMenuItem({
  children,
  text,
  isNested = false,
}: CollapsibleMenuItem) {
  const [open, setOpen] = useState(false);
  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
    setOpen((open) => !open);
  };
  return (
    <>
      <ListItemStyled onClick={handleClick} disablePadding>
        <ListItemButton sx={{ pl: isNested ? 4 : 2 }}>
          <ListItemText primary={text} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItemStyled>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  );
}

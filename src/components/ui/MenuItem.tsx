import {
  CircularProgress,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { ReactNode, memo } from "react";
import useNavigateAndCheckError from "src/hooks/useNavigateAndCheckErrors";

type MenuItemProps = {
  to: string;
  text: string;
  icon?: ReactNode;
};

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

function MenuItem({ to, text, icon }: MenuItemProps) {
  const { goToPage, isLoadingNextPage } = useNavigateAndCheckError(to);
  return (
    <ListItemStyled disablePadding>
      <ListItemButton onClick={goToPage} disabled={isLoadingNextPage}>
        {isLoadingNextPage ? (
          <CircularProgress size={24} />
        ) : (
          icon && <ListItemIcon>{icon}</ListItemIcon>
        )}
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItemStyled>
  );
}

const MemoMenuItem = memo(MenuItem);

export default MemoMenuItem;

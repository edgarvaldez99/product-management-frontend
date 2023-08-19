import { List } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import MenuItem from "src/components/ui/MenuItem";

export default function MenuList(props: BoxProps) {
  return (
    <Box role="presentation" {...props}>
      <List component="nav">
        <MenuItem to="/product" text="Product" />
        <MenuItem to="/user" text="User" />
      </List>
    </Box>
  );
}

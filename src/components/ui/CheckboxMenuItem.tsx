import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { MouseEvent, memo, useRef } from "react";

type MenuItemProps = {
  text: string;
  onChange: (event: React.SyntheticEvent, checked: boolean) => void;
};

function MenuItem({ text, onChange }: MenuItemProps) {
  const ref = useRef<HTMLInputElement | null>(null);
  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
    ref.current?.click();
  };
  return (
    <ListItem disablePadding onClick={handleClick}>
      <ListItemButton>
        <FormGroup onClick={(e) => e.stopPropagation()}>
          <FormControlLabel
            onChange={onChange}
            control={<Checkbox inputRef={ref} color="primary" />}
            label={text}
            style={{ marginRight: 0 }}
          />
        </FormGroup>
      </ListItemButton>
    </ListItem>
  );
}

const CheckboxMenuItem = memo(MenuItem);

export default CheckboxMenuItem;

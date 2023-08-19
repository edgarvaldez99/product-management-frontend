import { FormControl } from "@mui/material";
import { PropsWithChildren } from "react";

export default function DenseFormControl(props: PropsWithChildren) {
  return (
    <FormControl margin="dense" fullWidth variant="outlined">
      {props.children}
    </FormControl>
  );
}

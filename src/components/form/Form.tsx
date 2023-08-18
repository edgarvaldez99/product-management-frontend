import { Box, SxProps } from "@mui/material";
import { FormikProps } from "formik";
import { PropsWithChildren } from "react";

const defaultSX = {
  mt: 2,
  "& .MuiTextField-root": {
    marginLeft: 0,
    marginRight: 0,
  },
};

type GenericFormProps<T> = PropsWithChildren & {
  formik: FormikProps<T>;
  sx?: SxProps;
};

export default function Form<T>({
  children,
  formik,
  sx = defaultSX,
}: GenericFormProps<T>) {
  return (
    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={sx}>
      {children}
    </Box>
  );
}

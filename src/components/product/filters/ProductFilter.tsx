import ClearIcon from "@mui/icons-material/Clear";
import FilterIcon from "@mui/icons-material/FilterAlt";
import { Button, Grid, IconButton, Menu } from "@mui/material";
import { FormikProps } from "formik";
import React, { MouseEvent } from "react";
import CategoryAutocompleteField from "src/components/form/CategoryAutocompleteField";
import DenseFormControl from "src/components/form/DenseFormControl";
import Field from "src/components/form/Field";
import ProductStatusField from "src/components/form/ProductStatusField";
import useIsUserLoggedIn from "src/hooks/useIsUserLoggedIn";
import { ProductFilterFormData } from "./product-filter.interface";

export type ProductFilterProps<T> = {
  formik: FormikProps<T>;
};

export default function ProductFilter({
  formik,
}: ProductFilterProps<ProductFilterFormData>) {
  const isLogged = useIsUserLoggedIn();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const open = Boolean(anchorEl);
  const name = formik.values.name;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = () => {
    handleClose();
    formik.handleSubmit();
  };

  return (
    <div>
      <Button
        variant="outlined"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        startIcon={<FilterIcon />}
        size="small"
        onClick={handleClick}
        sx={{ marginBottom: "10px" }}
      >
        Filtros
      </Button>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <li>
          <Grid
            container
            spacing={2}
            sx={{ boxSizing: "border-box", padding: "1rem" }}
          >
            <Grid item xs={12}>
              <DenseFormControl>
                <Field
                  label="Nombre"
                  name="name"
                  formik={formik}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        sx={{ visibility: name ? "visible" : "hidden" }}
                        onClick={() => formik.setFieldValue("name", "")}
                      >
                        <ClearIcon />
                      </IconButton>
                    ),
                  }}
                />
              </DenseFormControl>
            </Grid>
            <Grid item xs={12}>
              <DenseFormControl>
                <ProductStatusField formik={formik} />
              </DenseFormControl>
            </Grid>
            {isLogged && (
              <Grid item xs={12}>
                <DenseFormControl>
                  <CategoryAutocompleteField formik={formik} />
                </DenseFormControl>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                type="button"
                color="primary"
                variant="contained"
                onClick={handleSubmit}
              >
                Aplicar
              </Button>
            </Grid>
          </Grid>
        </li>
      </Menu>
    </div>
  );
}

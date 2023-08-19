/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Autocomplete,
  CircularProgress,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FormikProps } from "formik";
import { useEffect } from "react";
import { CATEGORY_QUERY_KEY } from "src/constants";
import { Category } from "src/interfaces/category";
import CategoryService from "src/services/category.service";

export type FieldProps<T> = TextFieldProps & {
  name?: string;
  formik: FormikProps<T>;
};

export default function CategoryAutocompleteField<T>({
  name = "categories",
  formik,
}: FieldProps<T>) {
  const queryClient = useQueryClient();
  const value = (formik.values as any)[name];
  const { data, isLoading } = useQuery<Category[]>({
    queryKey: [CATEGORY_QUERY_KEY],
    queryFn: CategoryService.getAllList,
  });
  useEffect(
    () => () => {
      queryClient.cancelQueries([CATEGORY_QUERY_KEY]);
    },
    [],
  );
  return (
    <Autocomplete
      multiple
      id={name}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
      options={data ?? []}
      value={value}
      loading={isLoading}
      onChange={(_, newValue) => {
        formik.setFieldValue(name, [...newValue]);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Categorias"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}

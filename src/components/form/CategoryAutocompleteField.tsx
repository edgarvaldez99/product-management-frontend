/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FieldProps } from "src/components/form/form.interface";
import { CATEGORY_QUERY_KEY } from "src/constants";
import { Category } from "src/interfaces/category";
import CategoryService from "src/services/category.service";

export default function CategoryAutocompleteField<T>({
  name,
  formik,
}: FieldProps<T>) {
   
  const value = (formik.values as any)[name];

  const { data, isLoading } = useQuery<Category[]>({
    queryKey: [CATEGORY_QUERY_KEY],
    queryFn: () => CategoryService.getAllList({}),
  });

  return (
    <Autocomplete
      multiple
      id="categories"
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
                {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}

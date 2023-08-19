import Field from "./Field";
import { AttachFile } from "@mui/icons-material";
import { Button, InputAdornment, TextFieldProps } from "@mui/material";
import { FormikProps } from "formik";
import { ChangeEvent, useRef } from "react";

export type FieldProps<T> = TextFieldProps & {
  name?: string;
  formik: FormikProps<T>;
  onFileChange: (event: string) => void;
};

export default function FileField<T>({
  formik,
  name = "archivo",
  label = "Adjuntar Archivo",
  onFileChange,
  ...props
}: FieldProps<T>) {
  const reader = new FileReader();
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    hiddenFileInput.current?.click();
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileUploaded = event.target.files[0];
      reader.readAsDataURL(fileUploaded);
      reader.onload = function () {
        const base64 = reader.result;
        const fileBase64 = base64?.toString().split(",").toString();
        if (fileBase64) {
          formik.setFieldValue(name, fileBase64);
          onFileChange(fileBase64);
        }
      };
    }
  };
  return (
    <>
      <Field
        autoFocus
        label={label}
        name={name}
        formik={formik}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Button onClick={handleClick}>
                <AttachFile />
              </Button>
            </InputAdornment>
          ),
        }}
        {...props}
      />
      <input
        accept="images/*"
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
}

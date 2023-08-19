import { Button, TextFieldProps } from "@mui/material";
import { FormikProps } from "formik";
import { Image } from "src/interfaces/image";
import { ProductFormData } from "src/interfaces/product";
import FileField from "./FileField";
import { CSSProperties } from "react";

export type FieldProps<T> = TextFieldProps & {
  name?: string;
  formik: FormikProps<T>;
};

const imagesStyles: CSSProperties = {
  objectFit: "cover",
  width: "100px",
  height: "100px",
  display: "inline-block",
  margin: "3px"
};

export default function ProductImagesField({
  formik,
  name = "images",
  ...props
}: FieldProps<ProductFormData>) {
  const images: Image[] = formik.values.images;
  const handleClick = () => {
    formik.setFieldValue("images", [...images, { id: 0, photo: "" }]);
  };
  const handleFileChange = (index: number, fileBase64: string) => {
    formik.setFieldValue(`${name}.${index}.id`, fileBase64.length + Math.random());
  };
  return (
    <>
      {images.map((image, index) => {
        return image.photo !== "" ? (
          <img
            src={image.photo}
            key={image.id}
            style={imagesStyles}
          />
        ) : (
          <FileField
            key={index}
            name={`${name}.${index}.photo`}
            label="Imagen"
            formik={formik}
            onFileChange={(e) => handleFileChange(index, e)}
            {...props}
          />
        );
      })}
      <div>
        <Button onClick={handleClick}>Agregar Imagen</Button>
      </div>
    </>
  );
}

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import {
  GridActionsCellItem,
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PRODUCT_QUERY_KEY } from "src/constants";
import { useModal } from "src/hooks/contexts";
import { Product } from "src/interfaces/product";
import ProductService from "src/services/product.service";
import ProductEdit from "./ProductEdit";
import { CSSProperties } from "react";

const imagesStyles: CSSProperties = {
  objectFit: "cover",
  width: "100px",
  height: "100px",
  display: "inline-block",
  margin: "3px",
};

export default function ProductColumnDef(): GridColDef[] {
  const { openModal } = useModal();
  const queryClient = useQueryClient();
  const deleteMutation = useMutation<Product, unknown, number>({
    mutationFn: (id) => ProductService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries([PRODUCT_QUERY_KEY]);
    },
  });

  const handleEdit = (id: number) => {
    openModal(<ProductEdit id={id} />);
  };

  return [
    {
      field: "name",
      headerName: "Nombre del Producto",
      flex: 1,
      minWidth: 200,
      filterable: true,
      sortable: true,
    },
    {
      field: "status",
      headerName: "Estado",
      flex: 1,
      minWidth: 200,
      filterable: true,
      sortable: true,
    },
    {
      field: "categories",
      headerName: "Categorias",
      width: 200,
      filterable: false,
      sortable: true,
      valueGetter: (params: GridValueGetterParams<Product>) =>
        params.row.categories?.map((c) => c.name).join(", "),
    },
    {
      field: "images",
      headerName: "Imagen",
      width: 100,
      filterable: false,
      sortable: true,
      renderCell: (params: GridRenderCellParams<Product>) =>
        params.row.images?.length ? (
          <img src={params.row.images[0].photo} alt="" style={imagesStyles} />
        ) : (
          <span></span>
        ),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "ACCIONES",
      width: 150,
      filterable: false,
      sortable: false,
      getActions: (params: GridRowParams<Product>) => [
        <GridActionsCellItem
          key={`delete-product-${params.row.id}`}
          icon={
            <Tooltip title="Eliminar Producto">
              <DeleteIcon />
            </Tooltip>
          }
          label="Eliminar Producto"
          onClick={() => deleteMutation.mutate(params.row.id)}
        />,
        <GridActionsCellItem
          key={`product-edit-${params.row.id}`}
          icon={
            <Tooltip title="Editar Producto">
              <EditIcon />
            </Tooltip>
          }
          label="Editar Producto"
          onClick={() => handleEdit(params.row.id)}
        />,
      ],
    },
  ];
}

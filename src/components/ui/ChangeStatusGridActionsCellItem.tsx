import { Tooltip } from "@mui/material";
import { GridActionsCellItem, GridRowParams } from "@mui/x-data-grid";
import { useMutation } from "@tanstack/react-query";
import { ReactElement, useState } from "react";
import { GridRowModel } from "src/interfaces/grid-row-model";
import ConfirmDialog from "./ConfirmDialog";

export type ChangeStatusGridActionsCellItemProps<T extends GridRowModel> = {
  title: string;
  message: string;
  params: GridRowParams<T>;
  mutationFn: (id: number) => Promise<T>;
  onSuccess: () => void;
};

type Props<T extends GridRowModel> = ChangeStatusGridActionsCellItemProps<T> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: ReactElement<any, any>;
};

export default function ChangeStatusGridActionsCellItem<
  T extends GridRowModel,
>({ title, message, params, icon, mutationFn, onSuccess }: Props<T>) {
  const {
    row: { id },
  } = params;
  const [open, setOpen] = useState(false);
  const { mutate } = useMutation<T, unknown, number>({
    mutationFn,
    onSuccess,
  });
  const handleSuccess = () => {
    mutate(id);
    setOpen(false);
  };
  return (
    <>
      <GridActionsCellItem
        icon={<Tooltip title={title}>{icon}</Tooltip>}
        label={title}
        onClick={() => setOpen(true)}
      />
      <ConfirmDialog
        open={open}
        title={title}
        message={message}
        onClose={() => setOpen(false)}
        onSuccess={handleSuccess}
      />
    </>
  );
}

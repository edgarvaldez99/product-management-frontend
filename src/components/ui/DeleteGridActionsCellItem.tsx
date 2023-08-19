import Delete from "@mui/icons-material/Delete";
import { styled } from "@mui/system";
import { GridRowModel } from "src/interfaces/grid-row-model";
import ChangeStatusGridActionsCellItem, {
  ChangeStatusGridActionsCellItemProps,
} from "./ChangeStatusGridActionsCellItem";

const DeleteIcon = styled(Delete)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export default function DeleteGridActionsCellItem<T extends GridRowModel>(
  props: ChangeStatusGridActionsCellItemProps<T>,
) {
  return <ChangeStatusGridActionsCellItem {...props} icon={<DeleteIcon />} />;
}

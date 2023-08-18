import { Box, Modal } from "@mui/material";
import React from "react";

const position = "absolute";
const style = {
  position: position,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type ModalComponentProps = {
  isModalOpen: boolean;
  modalContent: React.ReactNode;
  closeModal: () => void;
};

export default function ModalComponent({
  isModalOpen,
  closeModal,
  modalContent,
}: ModalComponentProps) {
  return (
    <Modal open={isModalOpen} onClose={closeModal}>
      <Box sx={style}>{modalContent}</Box>
    </Modal>
  );
}

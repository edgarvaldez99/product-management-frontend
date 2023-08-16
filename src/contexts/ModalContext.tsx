import React, { PropsWithChildren, createContext, useState } from "react";

type ModalContent = React.ReactNode;

type ModalContextType = {
  isModalOpen: boolean;
  modalContent: ModalContent;
  openModal: (content: ModalContent) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  modalContent: null,
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }: PropsWithChildren) {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const isModalOpen = modalContent != null;

  const openModal = (content: ModalContent) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const modalContextValue: ModalContextType = {
    isModalOpen,
    modalContent,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}

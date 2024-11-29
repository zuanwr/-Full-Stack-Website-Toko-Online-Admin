"use client";

import { DialogHeader,Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle } from "./dialog";
import { defaultConfig } from "next/dist/server/config-shared";

interface modalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}: modalProps) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
export default Modal;
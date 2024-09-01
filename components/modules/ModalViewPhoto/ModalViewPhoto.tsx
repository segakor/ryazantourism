/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Modal, ModalContent } from "@nextui-org/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
};
export const ModalViewPhoto = ({ isOpen, onClose, imgUrl }: Props) => (
  <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
    <ModalContent>
      <img src={imgUrl} />
    </ModalContent>
  </Modal>
);

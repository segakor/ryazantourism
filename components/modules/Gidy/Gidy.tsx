/* eslint-disable @next/next/no-img-element */
"use client";
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import { TGid } from "@/types/types";
import { ModalContent as Foo } from "./ModalContent";

import { Modal, ModalContent, ModalBody } from "@nextui-org/modal";
import { useDisclosure } from "@nextui-org/react";

export const Gidy = ({ data }: { data: TGid[] }) => {
  return (
    <div>
      <div className="h3 title">Экскурсоводы и гиды Рязани</div>
      <div className="gid_group">
        {data.map((item, index) => (
          <Gid key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export const Gid = ({ item }: { item: TGid }) => {
  const { isOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div className="gid_item" onClick={onOpenChange}>
        <img
          className="gid_image"
          src={"https://i.ibb.co/LR6FL3t/image.png"}
          alt=""
        />
        <div className="gid_item_inner">
          <div className="gid_item_header">
            <Icons icon="goTo" />
          </div>
          <div className="gid_item_body">
            <div className="h5">{item.fio}</div>
            <div className="text4">{item.shortDecs}</div>
            <div className="note-text">{item.phone}</div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        scrollBehavior="outside"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <Foo {...item} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

/* eslint-disable @next/next/no-img-element */
"use client";
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import { TGid } from "@/types/types";
import { ModalContent as Foo } from "./ModalContent";

import { Modal, ModalContent, ModalBody } from "@nextui-org/modal";
import { useDisclosure } from "@nextui-org/react";
import { createShimmer } from "@/utils/shimer";
import Image from "next/image";
import { Typography } from "@/components/elements/Typography/Typography";

export const Gidy = ({ data }: { data: TGid[] }) => {
  return (
    <div>
      <Typography variant="h3" className="font-medium mb-14">
        Экскурсоводы и гиды Рязани
      </Typography>
      <div className="gid_group">
        {data.map((item, index) => (
          <Gid key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

//TODO: Image сделать один на всех
export const Gid = ({ item }: { item: TGid }) => {
  const { isOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div className="gid_item group/item" onClick={onOpenChange}>
        <div className={`w-full relative pt-[100%]`}>
          <Image
            src={item.srcImg}
            alt="img"
            objectFit="cover"
            fill
            className={`w-full h-full top-0 left-0 object-cover rounded-[30px] brightness-[90%] group-hover/item:scale-[115%] group-hover/item:transition-all transition-all`}
            placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
            priority
          />
        </div>
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

/* eslint-disable @next/next/no-img-element */
"use client";
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import { useState } from "react";
import { Modal } from "@/components/elements/Modal/Modal";
import { ModalContent } from "./ModalContent";
import { TGid } from "@/types/types";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    setIsModalOpen(true);
    console.log("asdasd");
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="gid_item" onClick={onModalOpen}>
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
            <div className="text4">
             {item.shortDecs}
            </div>
            <div className="note-text">{item.phone}</div>
          </div>
        </div>
      </div>
      <Modal open={isModalOpen} onClose={onModalClose}>
        <ModalContent {...item} />
      </Modal>
    </div>
  );
};

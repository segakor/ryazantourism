/* eslint-disable @next/next/no-img-element */
"use client";
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import { useState } from "react";
import { Modal } from "@/components/elements/Modal/Modal";

export const Gid = () => {
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
            <div className="h5">Паначева Ксения</div>
            <div className="text4">
              Экскурсовод по городу и области, автор туристско-образовательного
              проекта «Я вам покажу»
            </div>
            <div className="note-text">+7 (920) 980-58-48</div>
          </div>
        </div>
      </div>
      <Modal open={isModalOpen} onClose={onModalClose}>
        <div className="modal_content">
          <div className="modal_content_left">
            <div className="modal_content_left_img">
              <img
                className="gid_image"
                src={"https://i.ibb.co/LR6FL3t/image.png"}
                alt=""
              />
            </div>
            <div className="modal_content_left_phone styled_link">
              <div className="loyalty-text">Номер телефона</div>
              <a  className="h4-2" href="tel:+7 (920) 639-44-76">+7 (920) 639-44-76</a>
            </div>
          </div>
          <div className="modal_content_right">
            <div className="h4">Паначева Ксения</div>
            <div>
              В прошлом журналист, главный редактор двух ведущих городских
              сайтов, организатор фестивалей. Теперь — автор экскурсионного
              проекта «Вот это Рязань!». Экскурсии Николая больше
              познавательные, чем развлекательные: для тех, кто хочет узнать
              историю города и легенды рязанской земли. Экскурсия превращается в
              прогулку со старым знакомым: наполненная информацией, но при этом
              лёгкая и неутомительная. Темы: обзорная по Рязани и рязанское
              купечество. Поездки по области: Иоанно-Богословский монастырь в
              Пощупове, усадьбы фон Дервизов, старейшая доменная печь и первая в
              России игольная фабрика, Окский заповедник, село Ижевское — родина
              Циолковского и многое другое.
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export const Gidy = () => {
  return (
    <div>
      <div className="h3 title">Экскурсоводы и гиды Рязани</div>
      <div className="gid_group">
        <Gid />
        <Gid />
        <Gid />
        <Gid />
        <Gid />
      </div>
    </div>
  );
};

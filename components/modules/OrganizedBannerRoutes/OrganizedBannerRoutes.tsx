"use client";
import Image from "next/image";
import "./style.css";
import Button from "@/components/elements/Button/Button";
import { ModalOrder as Foo } from "../ModalOrder/ModalOrder";
import { useDisclosure } from "@nextui-org/react";
import { Modal, ModalContent, ModalBody } from "@nextui-org/modal";
import { Typography } from "@/components/elements/Typography/Typography";

const cards = [
  {
    title: "Вас встретят",
    desc: "Каждую субботу с конца апреля по конец октября мы встречаем гостейгорода около «АМАКС Конгресс-отель» (Первомайский просп., 54). Время старта 12.00.",
    srcImg: "/routesCard/icon_1.png",
  },
  {
    title: "Покажут лучшее",
    desc: "Профессиональные гиды проведут для вас бесплатную обзорную экскурсию по Рязани и познакомят с нашими главными достопримечательностями.",
    srcImg: "/routesCard/icon_2.png",
  },
  {
    title: "Расскажут о самом полезном и выгодном",
    desc: "Вы узнаете о локальных сервисах, которые помогут сэкономить время, деньги и нервы в вашей поездке.",
    srcImg: "/routesCard/icon_3.png",
  },
  {
    title: "Обеспечат необходимым",
    desc: "Конечная точка экскурсии — гостеприимный визит-центр на пешеходной улице Почтовой. Здесь вы найдете материалы для отдыха или дальнейшего самостоятельного изучения города: путеводитель проекта, карту Рязани, тематические буклеты и сувениры.",
    srcImg: "/routesCard/icon_4.png",
  },
];

export const OrganizedBannerRoutes = () => {

  const { isOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between gap-[1.875rem]">
        <div className="md:flex-[0_1_20rem] flex-[1rem]">
          <Typography variant="h3" className="mb-7 font-medium">Приезжай на один день или оставайся на выходные</Typography>
          <Button
            label={"Записаться на экскурсию"}
            onClick={onOpenChange}
            isBlackHover
          />
        </div>

        <div className="md:flex-[0_1_50rem] md:grid flex flex-wrap grid-cols-2 justify-center gap-5">
          {cards.map((item, index) => (
            <div className="overflow-hidden" key={index}>
              <div className="routes_banner_icon">
                <Image width={42} height={42} src={item.srcImg} alt="Icon" />
              </div>

              <div className="routes_banner">
                <div className="routes_banner_svg">
                  <Image
                    width={390}
                    height={156}
                    src={"/routesCard/organized.svg"}
                    alt="Icon"
                  />
                </div>
                <div className="routes_banner_content">
                  <div className="text2">{item.title}</div>
                  <div className="text3">{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
          <svg height="0" width="0">
            <defs>
              <clipPath id="svgPathRoutes" clipPathUnits="objectBoundingBox">
                <path
                  d="M0.128,0.308 C0.227,0.308,0.308,0.227,0.308,0.128 C0.308,0.1,0.301,0.074,0.29,0.051 C0.28,0.03,0.294,0,0.317,0 H0.949 C0.977,0,1,0.023,1,0.051 V0.949 C1,0.977,0.977,1,0.949,1 H0.051 C0.023,1,0,0.977,0,0.949 V0.317 C0,0.294,0.03,0.28,0.051,0.29 C0.074,0.301,0.1,0.308,0.128,0.308"
                  fill="black"
                ></path>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        scrollBehavior="outside"
        backdrop="blur"
      >
        <ModalContent className="bg-[#806fdf] p-0">
          {(onClose) => (
            <>
              <ModalBody>
                <Foo/>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

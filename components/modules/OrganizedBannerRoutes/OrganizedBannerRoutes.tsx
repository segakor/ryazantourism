"use client";
import Image from "next/image";
import Button from "@/components/elements/Button/Button";
import { ModalOrder } from "../ModalOrder/ModalOrder";
import { useDisclosure } from "@nextui-org/react";
import { Modal, ModalContent, ModalBody } from "@nextui-org/modal";
import { Typography } from "@/components/elements/Typography/Typography";
import { organizedBannerCard } from "@/constants/contstants";
import { useMediaQuery } from "react-responsive";

export const OrganizedBannerRoutes = () => {
  const { isOpen, onOpenChange } = useDisclosure();

  const mdMedia = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between gap-[1.875rem]">
        <div className="md:flex-[0_1_20rem] flex-[1rem]">
          <Typography variant="h3" className="mb-7 font-medium">
            Приезжай на один день или оставайся на выходные
          </Typography>
          <Button
            label={"Записаться на экскурсию"}
            onClick={onOpenChange}
            isBlackHover
          />
        </div>

        <div className="md:flex-[0_1_50rem] md:grid flex flex-wrap grid-cols-2 justify-center gap-5">
          {organizedBannerCard.map((item, index) => (
            <div className="overflow-hidden" key={index}>
              <div
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                className="rounded-[50%] w-[6.25rem] h-[6.25rem] 
              flex justify-center items-center absolute shadow-sm"
              >
                <Image width={42} height={42} src={item.srcImg} alt="Icon" />
              </div>

              <div
                style={{ clipPath: `url(#svgPathRoutes)` }}
                className="hover:bg-[var(--color-green)] h-[24.375rem] md:w-[24.375rem] w-auto bg-[var(--color-very-light-gray)] transition-all flex items-end relative"
              >
                <div className="m-w-[24.375rem] absolute top-10">
                  <Image
                    width={390}
                    height={156}
                    src={"/routesCard/organized.svg"}
                    alt="Icon"
                  />
                </div>
                <div className="relative p-9 grid gap-4">
                  <div className="text2 !font-medium">{item.title}</div>
                  <div className="text3 opacity-[0.5] !leading-snug">
                    {item.desc}
                  </div>
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
        size={mdMedia ? "4xl" : "full"}
        backdrop="blur"
        className={!mdMedia ? "overflow-scroll" : ""}
      >
        <ModalContent className="bg-[#806fdf] p-0">
          <ModalBody>
            <ModalOrder />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

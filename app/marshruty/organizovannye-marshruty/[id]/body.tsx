"use client";
import { Button } from "@/components/elements/ButtonNew";
import { LongRead } from "@/components/modules/LongRead";
import { ModalTour } from "@/components/modules/ModalOrder";
import { TLongReadBody, TOrgEventCard } from "@/types/types";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";
import { useSearchParams } from "next/navigation";

const Body = ({ data }: { data: TOrgEventCard }) => {
  const { isOpen, onOpenChange } = useDisclosure();
  const mdMedia = useMediaQuery({ query: "(min-width: 768px)" });
  const searchParams = useSearchParams();
  const startDate = searchParams.get("startDate") || "";

  return (
    <section className="grid gap-7 mt-[-7.5rem]">
      <div className="grid_layout max-w-[1280px] m-[0_auto] p-[0_10px]">
        <div className="bg-white md:p-[50px] p-[30px] rounded-[30px] grid z-[2] md:gap-7 gap-4 w-full relative">
          <div className="flex md:gap-16 gap-4 md:flex-row flex-col">
            <div>
              <div className="mb-1 opacity-60">Продолжительность:</div>
              <div className="md:text-2xl text-base font-medium">
                {data.days}
              </div>
            </div>
            <div>
              <div className="mb-1 opacity-60">Стоимость:</div>
              <div className="md:text-2xl text-base font-medium">
                {data.price}
              </div>
            </div>
          </div>
          <div className="md:max-w-[70%]">
            <div>
              <div className="mb-1 opacity-60">Что входит в стоимость:</div>
              <div className="md:text-2xl text-base font-medium">
                {data.includePrice}
              </div>
            </div>
          </div>
          <div className="absolute w-full h-full left-0 right-0 ">
            <div className="flex md:items-center h-full justify-end md:px-[50px] px-3 md:mt-0 mt-3">
              <Button
                onClick={onOpenChange}
                variant="greenBlack"
                className="!rounded-full md:w-40 w-32 md:h-40 h-32"
              >
                Заказать тур
              </Button>
            </div>
          </div>
        </div>
      </div>
      <LongRead
        body={data.template as TLongReadBody[]}
        noMargin
        noSidebar
      ></LongRead>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size={mdMedia ? "5xl" : "full"}
        backdrop="blur"
        className={!mdMedia ? "overflow-scroll" : ""}
        classNames={{ closeButton: "bg-white" }}
      >
        <ModalContent className="bg-[#806fdf] p-0">
          <ModalBody>
            <ModalTour tourName={data.title} startDate={startDate} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Body;

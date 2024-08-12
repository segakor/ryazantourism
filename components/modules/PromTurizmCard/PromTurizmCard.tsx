import { TPromTurizmCard } from "@/types/types";
import Image from "next/image";
import { createShimmer } from "@/utils/shimer";
import { Typography } from "@/components/elements/Typography/Typography";
import Link from "next/link";
import { TagsPromTur } from "@/components/elements/Tags/TagsPromTur";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { ModalDetails } from "./ModalDetails";

export const PromTurizmCard = ({ data }: { data: TPromTurizmCard[] }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mb-40">
      {data?.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};

const Card = ({ item }: { item: TPromTurizmCard }) => {
  const { isOpen, onOpenChange } = useDisclosure();

  return (
    <div className="rounded-[40px] flex flex-col bg-[var(--color-partner-card-grey)] overflow-hidden min-h-[500px]">
      <div>
        <div className="absolute p-7 z-[2]">
          <div className="rounded-full w-10 h-10 text-white font-medium border-solid border-3 border-white flex justify-center items-center">
            {item.ageLimit}+
          </div>
        </div>
        <div className="grid h-[200px] w-full">
          <div className={`w-full relative`}>
            <Image
              src={item.imgUrl[0]}
              alt="img"
              objectFit="cover"
              fill
              className={`w-full h-full top-0 left-0 object-cover rounded-rounded-t-lg  brightness-[90%]`}
              placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
              priority
            />
          </div>
        </div>
      </div>
      <div className="p-[30px] flex flex-col justify-between h-full">
        <div className="grid gap-3">
          <TagsPromTur tags={item.tag} />
          <Typography variant="h5" className="font-semibold">
            {item.title}
          </Typography>
          <div className="partner-card-text flex gap-2">
            <span>{item.desc}</span>
          </div>
          <div className="note-text flex gap-2">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 6.85831C0 3.61134 2.71333 0.986938 5.99539 0.986938C9.28669 0.986938 12 3.61134 12 6.85831C12 8.4945 11.405 10.0135 10.4256 11.301C9.34506 12.7212 8.0133 13.9586 6.51428 14.9299C6.1712 15.1543 5.86157 15.1713 5.48503 14.9299C3.97747 13.9586 2.64571 12.7212 1.57447 11.301C0.594343 10.0135 0 8.4945 0 6.85831ZM4.01953 7.04108C4.01953 8.12882 4.90713 8.98433 5.99545 8.98433C7.08449 8.98433 7.98063 8.12882 7.98063 7.04108C7.98063 5.96182 7.08449 5.06467 5.99545 5.06467C4.90713 5.06467 4.01953 5.96182 4.01953 7.04108Z"
                fill="black"
              />
            </svg>
            {item.address}
          </div>
        </div>
        <div onClick={onOpenChange} className="mt-5 cursor-pointer">
          <div className="group/item bg-[var(--color-green)] hover:bg-black hover:text-white transition-all py-5 px-10 flex items-center justify-center rounded-full ">
            <div className="flex gap-2 items-center">Подробнее</div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        scrollBehavior="outside"
        backdrop='opaque'
      >
        <ModalContent>
          <ModalBody>
            <ModalDetails {...item} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

import { createShimmer } from "@/utils/shimer";
import { useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { ModalViewPhoto } from "../ModalViewPhoto/ModalViewPhoto";
import { useState } from "react";

type Props = {
  data: { imgUrl: string }[];
};
export const VdohnovitsiyaGalery = ({ data }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openImg, setOpenImg] = useState("");

  const handleOpen = (imgUrl: string) => {
    setOpenImg(imgUrl);
    onOpen();
  };

  return (
    <>
      <div className="grid grid-rows-2 grid-flow-row grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div
            className={`grid h-[272px] w-full cursor-pointer group/item`}
            key={index}
            onClick={() => handleOpen(item.imgUrl)}
          >
            <div className={`w-full relative`}>
              <Image
                src={item.imgUrl}
                alt="img"
                objectFit="cover"
                fill
                className={`w-full h-full top-0 left-0 object-cover rounded-3xl group-hover/item:brightness-[70%] transition-all`}
                placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
                priority
                unoptimized
              />
              <div className="group-hover/item:opacity-100 opacity-0 text-white absolute w-full h-full flex justify-center items-center transition-all">
                Посмотреть
              </div>
            </div>
          </div>
        ))}
      </div>
      <ModalViewPhoto isOpen={isOpen} onClose={onClose} imgUrl={openImg} />
    </>
  );
};

import { TGid } from "@/types/types";
import { createShimmer } from "@/utils/shimer";
import Image from "next/image";

//TODO: Image сделать один на всех
export const ModalContent = (data: TGid) => {
  return (
    <div className="modal_content">
      <div className="modal_content_left">
        <div className="modal_content_left_img">
        <div className={`w-full relative pt-[100%]`}>
          <Image
            src={data.srcImg}
            alt="img"
            objectFit="cover"
            fill
            className={`w-full h-full top-0 left-0 object-cover rounded-[30px] brightness-[90%]`}
            placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
            priority
          />
        </div>
        </div>
        <div className="modal_content_left_phone styled_link">
          <div className="loyalty-text">Номер телефона</div>
          <a className="h4-2" href="tel:+7 (920) 639-44-76">
            {data.phone}
          </a>
        </div>
      </div>
      <div className="modal_content_right">
        <div className="h4">{data.fio}</div>
        <div className="text4">{data.desc}</div>
      </div>
    </div>
  );
};

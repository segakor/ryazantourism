import { TGid } from "@/types/types";

/* eslint-disable @next/next/no-img-element */

export const ModalContent = (data: TGid) => {
  return (
    <div className="modal_content">
      <div className="modal_content_left">
        <div className="modal_content_left_img">
          <img className="gid_image" src={data.srcImg} alt="" />
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

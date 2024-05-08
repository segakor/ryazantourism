/* eslint-disable @next/next/no-img-element */
import Icons from "@/components/elements/Logo/Icons";
import "./style.css";

type ArchCard = {
  imgUrl: string;
  title: string;
  desc: string;
  address: string;
};
export const ArchCard = ({ data }: { data: ArchCard[] }) => {
  return (
    <div className="arch_card_body">
      {data.map((item, index) => (
        <div className="arch_card_item test" key={index}>
          <img className="arch_image" src={item.imgUrl} alt="" />
          <div className="arch_card_item_inner">
            <div className="arch_card_item_header">
              <Icons icon="goTo" />
            </div>
            <div className="arch_card_item_body">
              <div className="h5">{item.title}</div>
              <div className="text4">{item.desc}</div>
              <div className="note-text">{item.address}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

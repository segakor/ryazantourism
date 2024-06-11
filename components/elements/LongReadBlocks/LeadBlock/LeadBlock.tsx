import { ImageBlock } from "../ImageBlock/ImageBlock";
import { TextBlock } from "../TextBlock/TextBlock";
import "./style.css";

export const LeadBlock = ({
  title,
  desc,
  srcImg,
}: {
  title: string;
  desc: string;
  srcImg?: string;
}) => {
  return (
    <div className="longread_block">
      {title && <div className="lead-text">{title}</div>}
      {desc && <TextBlock text={desc} />}
      {srcImg && <ImageBlock srcImg={srcImg} />}
    </div>
  );
};

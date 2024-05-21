import { ImageBlock } from "../ImageBlock/ImageBlock";
import { TextBlock } from "../TextBlock/TextBlock";
import "./style.css";

export const LongReadItemBlock = ({
  title,
  text,
  srcImg,
}: {
  title: string;
  text: string;
  srcImg: string;
}) => {
  return (
    <div className="longread_item_block">
      {title && <div className="h5">{title}</div>}
      {text && <TextBlock text={text} />}
      {srcImg && <ImageBlock srcImg={srcImg} />}
    </div>
  );
};

import { Typography } from "../../Typography/Typography";
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
      {title && (
        <Typography variant="h5" className="font-semibold">
          {title}
        </Typography>
      )}
      {text && <TextBlock text={text} />}
      {srcImg && <ImageBlock srcImg={srcImg} />}
    </div>
  );
};

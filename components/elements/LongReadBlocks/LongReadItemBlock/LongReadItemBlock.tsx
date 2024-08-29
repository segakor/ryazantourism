import { Typography } from "../../Typography/Typography";
import { ImageBlock } from "../ImageBlock/ImageBlock";
import { TextBlock } from "../TextBlock/TextBlock";

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
    <div className="grid gap-6">
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

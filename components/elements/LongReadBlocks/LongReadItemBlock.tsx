import { ImageBlock } from "./ImageBlock";
import { TextBlock } from "./TextBlock";
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
    <div>
      <div>
        <div className="h5" style={{ marginBottom: "10px" }}>
          {title}
        </div>
        <TextBlock text={text} />
      </div>
      {srcImg && <ImageBlock srcImg={srcImg} />}
    </div>
  );
};

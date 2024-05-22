import Link from "next/link";
import { ImageBlock } from "../ImageBlock/ImageBlock";
import "./style.css";

export const LinkBlock = ({
  srcImg,
  title,
  desc,
  link,
}: {
  srcImg: string;
  title: string;
  desc: string;
  link: string;
}) => {
  return (
    <Link href={link} target="_black">
      <div className="link_block">
        <div className="link_block_body">
          <div className="link_block_body_text">
            <div className="h5">{title}</div>
            <div className="note-text">{desc}</div>
          </div>
          <div className="link_block_image">
            <ImageBlock srcImg={srcImg} />
          </div>
        </div>
      </div>
    </Link>
  );
};

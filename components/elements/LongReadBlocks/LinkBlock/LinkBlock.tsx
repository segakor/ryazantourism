import Link from "next/link";
import { Typography } from "../../Typography/Typography";
import { createShimmer } from "@/utils/shimer";
import Image from "next/image";

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
      <div className="p-[30px] bg-[#f5f5f5] rounded-[30px] cursor-pointer hover:bg-[var(--color-green)] transition-all">
        <div className="flex md:flex-row justify-between md:gap-[60px] gap-5 flex-col">
          <div className="grid md:gap-0 gap-2">
            <Typography variant="h5" className="font-semibold">
              {title}
            </Typography>
            <div className="note-text">{desc}</div>
          </div>
          <div className="rounded-[30px] h-[98px] md:w-[200px] w-full overflow-hidden">
            <div className={`w-full relative md:pt-[100%] pt-[50%]`}>
              <Image
                src={srcImg}
                alt="img"
                objectFit="cover"
                fill
                className={`w-full h-full top-0 left-0 object-cover max-h-[437px]`}
                placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

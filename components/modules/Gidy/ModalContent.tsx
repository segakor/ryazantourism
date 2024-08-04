import { TGid } from "@/types/types";
import { createShimmer } from "@/utils/shimer";
import Image from "next/image";
import { Typography } from "@/components/elements/Typography/Typography";
import Link from "next/link";

//TODO: Image сделать один на всех
export const ModalContent = (data: TGid) => {
  return (
    <div className="flex gap-10 py-5 md:flex-row flex-col">
      <div className="grid gap-5">
        <div className="md:w-[300px] w-full h-[408px] overflow-hidden grid">
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
      </div>
      <div>
        <Typography variant="h4" className="font-medium mb-5">
          {data.fio}
        </Typography>
        <p className="text4 mb-5">{data.desc}</p>
        <Typography variant="h5">
          <Link
            className="text-[var(--color-blue)] hover:text-[var(--color-green)] transition-all"
            href="tel:+7 (920) 639-44-76"
          >
            {data.phone}
          </Link>
        </Typography>
      </div>
    </div>
  );
};

/* eslint-disable @next/next/no-img-element */
import { Typography } from "@/components/elements/Typography/Typography";
import { data } from "@/constants/pages/marshruty/samostoyatelnye-marshruty/3dtour";
import Link from "next/link";

const TourCardItem = ({
  item,
}: {
  item: { title: string; link: string; srcImg: string };
}) => {
  return (
    <div className="rounded-[40px] flex flex-col bg-[var(--color-partner-card-grey)] overflow-hidden">
      <div className="bg-[var(--color-grey)] h-[200px] md:w-[408px] w-full flex">
        <img
          className="w-full h-full object-cover filter-[90%]"
          src={item.srcImg}
          alt="Фон"
        />
      </div>
      <div className="p-[30px] flex flex-col justify-between h-full gap-[30px]">
        <div className="grid gap-3">
          <Typography variant="h5" className="font-medium">
            {item.title}
          </Typography>
        </div>
        <Link href={item.link} target="_blank">
          <div
            className="bg-[var(--color-green)] hover:bg-black text-black hover:text-white transition-all
               md:py-5 py-4 px-10 inline-block rounded-full "
          >
            <div className="flex gap-2 items-center">К сценарию</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export const TourCard = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
      {data.map((item, index) => (
        <TourCardItem key={index} item={item} />
      ))}
    </div>
  );
};

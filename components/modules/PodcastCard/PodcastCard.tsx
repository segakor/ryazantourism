import { data } from "@/constants/pages/marshruty/samostoyatelnye-marshruty/podcast";
import { Typography } from "@/components/elements/Typography/Typography";
import Link from "next/link";

export const PodcastCard = () => {
  return (
    <>
      <div className="overflow-x-scroll md:overflow-x-visible">
        <div className="grid md:grid-cols-2 grid-cols-[repeat(4,minmax(308px,4fr))] gap-7">
          {data.map((item, index) => (
            <PodcastCardItem {...item} key={index} />
          ))}
        </div>
      </div>
      <Link
        href="https://izi.travel/ru/ac86-turistskiy-informacionnyy-centr-ryazanskoy-oblasti/ru"
        className="md:mt-[-50px] mt-[-20px]"
      >
        <div
          className="bg-[#f2f2f2] hover:bg-[var(--color-green)] text-black transition-all
               md:py-5 py-4 px-10 inline-block rounded-full w-full text-center"
        >
          <Typography
            variant="h5"
            className="flex gap-2 items-center justify-center font-medium"
          >
            Смотреть все аудиогиды по Рязани
          </Typography>
        </div>
      </Link>
    </>
  );
};

const PodcastCardItem = ({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) => {
  return (
    <div className="bg-[#f2f2f2] flex flex-col h-full rounded-[30px] p-[30px] transition-all hover:bg-[var(--color-green)]">
      <div className="grid gap-[30px]">
        <Typography variant="h5" className="font-semibold">
          {title}
        </Typography>
        <Typography
          variant="h6"
          className="opacity-[0.4] font-medium leading-[145%]"
        >
          {desc}
        </Typography>
        <div>
          <Link
            className="flex items-center gap-2 transition-all font-medium underline-offset-2 underline hover:text-[var(--color-white)] group/item"
            href={link}
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path className="group-hover/item:fill-white transition-all"
                d="M5 7H7V17H5V7ZM1 10H3V14H1V10ZM9 2H11V20H9V2ZM13 4H15V22H13V4ZM17 7H19V17H17V7ZM21 10H23V14H21V10Z"
                fill="black"
              ></path>
            </svg>
            <span>Перейти к прослушиванию</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

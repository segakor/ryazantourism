import { TNews } from "@/types/types";
import Link from "next/link";

export const NewsCard = ({
  news,
  type,
}: {
  news: TNews[];
  type: "art" | "region";
}) => {
  return (
    <div className="grid md:gap-7 gap-10 md:grid-cols-3 grid-cols-1 my-20 md:mt-40 md:mb-20">
      {news?.map((item, index) => (
        <NewsItem item={item} key={index} type={type} />
      ))}
    </div>
  );
};

const NewsItem = ({ item, type }: { item: TNews; type: "art" | "region" }) => {
  const hrefDict = {
    art: `/professionalam/novosti-art/${item.id}`,
    region: `/ty-s-mestnym/novosty-regiona/${item.id}`,
  };

  const href = hrefDict[type];

  return (
    <Link
      href={href}
      className="h-full relative cursor-pointer group/item"
    >
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="rounded-full w-36 h-36 group-hover/item:opacity-100 opacity-0 transition-all border-dashed border-1 border-black bg-[var(--color-green)] flex justify-center items-center">
          <div className="flex flex-col items-center">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4881 17.5117L10.4742 25.5256L8.4707 23.5222L16.4845 15.5082L9.47244 8.49609H25.5002V24.5239L18.4881 17.5117Z"
                fill="black"
              ></path>
            </svg>
            <div className="underline decoration-1 text-center">
              Посмотреть новость
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 5.16%, rgba(0, 0, 0, 0.8) 78.18%, rgba(0, 0, 0, 0.8) 78.19%), url(${item.imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col justify-end rounded-3xl p-6 border-solid min-h-[37.125rem]"
      >
        <div className="h5 text-white">{item.title}</div>
      </div>
    </Link>
  );
};

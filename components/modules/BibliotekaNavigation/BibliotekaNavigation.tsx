import { bibliotekaNavigation } from "@/constants/contstants";
import Link from "next/link";

const GoToIcon = (
  <div className="md:w-20 md:h-20 bg-white flex justify-center rounded-full items-center group-hover/item:bg-[var(--color-green)] transition-all">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" />
      <path
        d="M25.5303 20.5303C25.8232 20.2374 25.8232 19.7626 25.5303 19.4697L20.7574 14.6967C20.4645 14.4038 19.9896 14.4038 19.6967 14.6967C19.4038 14.9896 19.4038 15.4645 19.6967 15.7574L23.9393 20L19.6967 24.2426C19.4038 24.5355 19.4038 25.0104 19.6967 25.3033C19.9896 25.5962 20.4645 25.5962 20.7574 25.3033L25.5303 20.5303ZM15 20.75H25V19.25H15V20.75Z"
        fill="black"
      />
    </svg>
  </div>
);

export const BibliotekaNavigation = () => {
  return (
    <section className="grid_layout">
      <div className="md:grid-cols-2 grid-cols-1 grid gap-7 color text-white md:my-40 my-20">
        {bibliotekaNavigation.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="group/item cursor-pointer flex md:h-[510px] h-96 rounded-[40px] p-[40px] color-white bg-cover"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div
              className={`flex flex-col ${
                (index === 0 || index === 3) && "justify-end"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="max-w-[360px]">
                  <h3 className="h3 mb-5">{item.title}</h3>
                  <p className="text2">{item.desc}</p>
                </div>
                {GoToIcon}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

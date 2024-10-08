import { ButtonLink } from "@/components/elements/ButtonNew";
import { Typography } from "@/components/elements/Typography/Typography";
import { bibliotekaNavigation } from "@/constants/contstants";
import Link from "next/link";

export const BibliotekaNavigation = () => {
  return (
    <section className="grid_layout">
      <div className="md:grid-cols-2 grid-cols-1 grid gap-7 color text-white md:my-40 my-20">
        {bibliotekaNavigation.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="group/item cursor-pointer flex md:h-[510px] h-80 rounded-[40px] md:p-10 p-5 color-white bg-cover shadow-lg"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div
              className={`flex flex-col ${
                (index === 0 || index === 3) && "justify-end"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="max-w-[360px]">
                  <Typography variant="h3" className="mb-5 font-medium">
                    {item.title}
                  </Typography>
                  <p className="text2">{item.desc}</p>
                </div>
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
              </div>
            </div>
          </Link>
        ))}
        <div
          className="md:col-span-2 col-span-1 md:h-[356px] rounded-[40px] md:p-20 p-5"
          style={{
            background: `url(/bibliotekaNavigation/gotrip.png)`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex md:items-center md:justify-between md:flex-row flex-col md:gap-0 gap-5">
            <div className="grid gap-3 md:w-[453px] w-auto">
              <Typography variant="h4" className="text-black font-medium">
                Уже вдохновились? Пора планировать путешествие в Рязань!
              </Typography>
              <div className="text-black opacity-50">
                Подскажем, где остановиться, поесть и куда сходить. Авторские
                маршруты, локальная кухня, интересные музеи и всего 2,5 часа от
                Москвы
              </div>
            </div>
           <ButtonLink href="/" variant='blackWhite'>Поехали!</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export const BibliotekaNavigationFlat = ({
  exclude,
}: {
  exclude: "posmotret" | "pochitat" | "poslushat" | "vdohnovitsiya";
}) => {
  const excludeBibliotekaNavigation = bibliotekaNavigation.filter(
    (item) => item.id !== exclude
  );
  return (
    <div>
      <Typography variant="h3" className="font-medium">
        Попробуйте также
      </Typography>
      <div>
        <div className="md:grid-cols-3 grid-cols-1 grid gap-7 color text-white mt-20 mb-40">
          {excludeBibliotekaNavigation.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="group/item cursor-pointer flex md:h-96 h-72 rounded-[40px] p-[40px] color-white bg-cover shadow-lg"
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
              <div className={`flex flex-col justify-between`}>
                <div className="flex justify-between items-center">
                  <div className="max-w-[360px]">
                    <Typography variant="h3" className="font-medium mb-5">
                      {item.title}
                    </Typography>
                    <p className="text2">{item.desc}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-white flex justify-center rounded-full items-center group-hover/item:bg-[var(--color-green)] transition-all">
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

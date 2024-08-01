import Icons from "@/components/elements/Logo/Icons";
import "./style.css";
import Image from "next/image";
import LinkButton from "@/components/elements/Button/LinkButton";
import { Typography } from "@/components/elements/Typography/Typography";
import Link from "next/link";

export const MainBannerRoutes = () => {
  return (
    <div className="grid md:gap-20 gap-10">
      <div className="grid justify-center text-center gap-5">
        <Typography variant="h2" className="font-medium">
          Маршруты
        </Typography>
        <div className="text2 flex">
          <svg
            width="36"
            height="31"
            viewBox="0 0 36 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.375 0H16.125L12.375 19.7045V31H0.5V19.7045L7.375 0ZM26.75 0H35.5L31.75 19.7045V31H19.875V19.7045L26.75 0Z"
              fill="#B9FA4F"
            />
          </svg>
          Исследуйте Рязань самостоятельно или с опытными экскурсоводами
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[28px]">
        <div className="banner_routes_card_first group/item">
          <Typography variant="h3" className="font-medium">
            Самостоятельные маршруты
          </Typography>
          <p className="text2">
            Готовые тематические сценарии для самостоятельных увлекательных
            путешествий. Рекомендуется для легких на подъем и любопытных
            искателей приключений
          </p>
          <Link href={"/marshruty/organizovannye-marshruty"}>
            <div
              className="bg-[var(--color-black)] group-hover/item:bg-white group-hover/item:text-black text-white transition-all
               md:py-5 py-4 px-10 inline-block rounded-full "
            >
              <div className="flex gap-2 items-center">Перейти</div>
            </div>
          </Link>
          <Image
            priority
            src={"/routesCard/first.svg"}
            alt="img"
            width={512}
            height={202}
            className="w-full object-none md:block hidden"
          />
        </div>
        <div className="banner_routes_card_second group/item">
          <Image
            priority
            src={"/routesCard/second.svg"}
            alt="img"
            width={512}
            height={202}
            className="w-full object-none md:block hidden"
          />
          <Typography variant="h3" className="font-medium">
            Маршрут с гидом
          </Typography>
          <p className="text2">
            Проект для тех, кто готов к глубокому погружению в историю и
            культуру города и области в компании с экскурсоводом. Подходит для
            опытных и начинающих туристов
          </p>
          <Link href={"/marshruty/organizovannye-marshruty"}>
            <div
              className="bg-[var(--color-white)] group-hover/item:bg-black group-hover/item:text-white text-black transition-all
              md:py-5 py-4 px-10 inline-block rounded-full "
            >
              <div className="flex gap-2 items-center">Перейти</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

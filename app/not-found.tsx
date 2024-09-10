import { HeroPage } from "@/components/modules/HeroPage";
import Link from "next/link";

import type { Metadata } from "next";
import { WrapperGreyPages } from "@/components/wrapper";

export const metadata: Metadata = {
  title: "Всё о туризме в Рязани и Рязанской области",
  description: "",
};

export default function NotFound() {
  return (
    <WrapperGreyPages>
      <HeroPage
        imgUrl="/heroPages/notfound.jpg"
        title="Ошибка 404"
        classNameImage="brightness-90"
      />
      <div className="grid_layout">
        <div className="mt-10">
          Запрашиваемая страница не найдена Возможно вы ошиблись в адресе или
          страница была перемещена. Вы можете вернуться на{" "}
          <Link
            className="underline hover:text-[var(--color-green)] transition-all"
            href="/"
          >
            главную
          </Link>
          , или воспользоваться меню.
        </div>
      </div>
    </WrapperGreyPages>
  );
}

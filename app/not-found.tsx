import { HeroPage } from "@/components/modules/HeroPage";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pages">
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
    </div>
  );
}

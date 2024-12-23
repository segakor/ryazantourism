import { headerMenu, url } from "@/constants/contstants";
import { HeaderMenu } from "./HeaderMenu";
import { useState } from "react";
import Icons from "@/components/elements/Logo/Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NewYearLink } from "./NewYearLink";

export const HeaderNav = () => {
  return (
    <nav>
      <ul className="flex gap-10">
        {headerMenu.map((item, index) => (
          <li
            className="flex items-center gap-[0.3125rem] whitespace-nowrap 
            font-medium transition-all cursor-pointer group/item relative text-sm hover:text-[#96ee05]"
            key={index}
          >
            <span className="menu_link">
              {item.path ? (
                <Link href={item.path}>{item.item}</Link>
              ) : (
                <>{item.item}</>
              )}
            </span>
            {!!item.subItem.length && (
              <svg
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover/item:rotate-180 transition-all "
              >
                <path
                  d="M5 5L0.669872 0.500001L9.33013 0.5L5 5Z"
                  fill="black"
                  className="group-hover/item:fill-[#96ee05]"
                ></path>
              </svg>
            )}
            <HeaderMenu subItem={item.subItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const HeaderNavMobile = () => {
  const [indexOpen, setIndexOpen] = useState<number | null>(null);

  const router = useRouter();

  const onOpenSubMenu = (value: number) => {
    if (value === indexOpen) {
      setIndexOpen(null);
      return;
    }
    setIndexOpen(value);
  };

  return (
    <nav>
      <ul className="header_nav_mobile">
        {headerMenu.map((item, index) => (
          <div key={index} className="menu_item_mobile_item">
            <li
              className="menu_item_mobile"
              onClick={() => {
                !!item.subItem.length
                  ? onOpenSubMenu(index)
                  : router.push(item.path || "/");
              }}
            >
              <span className="menu_link">{item.item}</span>
              {!!item.subItem.length && (
                <div
                  className={
                    indexOpen === index
                      ? "chevron_mobile_active"
                      : "chevron_mobile"
                  }
                >
                  <svg
                    width="10"
                    height="5"
                    viewBox="0 0 10 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 5L0.669872 0.500001L9.33013 0.5L5 5Z"
                      fill="#141414"
                    ></path>
                  </svg>
                </div>
              )}
            </li>
            <div
              className={indexOpen === index ? "submenu" : "submenu_item_hide"}
            >
              <HeaderMenu subItem={item.subItem} isAdaptive />
            </div>
          </div>
        ))}
      </ul>
      <div className="grid gap-3 justify-center">
        <div className="grid gap-1 justify-center"><NewYearLink /></div>
        <div className="grid gap-1">
          <div className="opacity-60 text-sm mb-2 mt-2">
            Мобильное приложение
          </div>
          <div className="flex gap-2 justify-center">
            <Link href={url.apple} target="_blank">
              <Icons icon="apple" />
            </Link>
            <Link href={url.android} target="_blank">
              <Icons icon="android" />
            </Link>
          </div>
        </div>
        <div className="grid gap-1 justify-center">
          <div className="opacity-60 text-sm mb-2 mt-2">Мы в соцсетях</div>
          <div className="flex gap-2 justify-center">
            <Link href={url.vk} target="_blank">
              <Icons icon="vk" />
            </Link>
            <Link href={url.tg} target="_blank">
              <Icons icon="tg" />
            </Link>
            <Link href={url.ok} target="_blank">
              <Icons icon="ok" />
            </Link>
            <Link href={url.dzen} target="_blank">
              <Icons icon="dzen" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

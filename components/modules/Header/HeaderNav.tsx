import { headerMenu, url } from "@/constants/contstants";
import { HeaderMenu } from "./HeaderMenu";
import { useState } from "react";
import Icons from "@/components/elements/Logo/Icons";
import Link from "next/link";

export const HeaderNav = () => {
  return (
    <nav>
      <ul className="flex gap-10">
        {headerMenu.map((item, index) => (
          <li className="menu_item" key={index}>
            <span className="menu_link">
              {item.path ? (
                <Link href={item.path}>{item.item}</Link>
              ) : (
                <>{item.item}</>
              )}
            </span>
            {!!item.subItem.length && (
              <div className="chevron">
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
            <HeaderMenu subItem={item.subItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const HeaderNavMobile = () => {
  const [indexOpen, setIndexOpen] = useState<number | null>(null);

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
            <li className="menu_item_mobile"  onClick={() => onOpenSubMenu(index)}>
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
      <div className="icon_adaptive">
        <div className="header_block">
          <p className="header_title">Моб. приложение</p>
          <div className="header_block header_icon">
            <a href={url.apple} target="_blank">
              <Icons icon="apple" />
            </a>
            <a href={url.android} target="_blank">
              <Icons icon="android" />
            </a>
          </div>
        </div>
        <div className="header_block">
          <p className="header_title">Мы в соц. сетях</p>
          <div className="header_block header_icon">
            <a href={url.vk} target="_blank">
              <Icons icon="vk" />
            </a>
            <a href={url.tg} target="_blank">
              <Icons icon="tg" />
            </a>
            <a href={url.ok} target="_blank">
              <Icons icon="ok" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

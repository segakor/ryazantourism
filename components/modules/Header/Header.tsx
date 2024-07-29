"use client";
import { url } from "@/constants/contstants";
import "./style.css";
import { HeaderNav, HeaderNavMobile } from "./HeaderNav";
import Icons from "@/components/elements/Logo/Icons";
import LogoHeader from "@/components/elements/Logo/LogoHeader";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onOpenMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  const pathname = usePathname();

  useEffect(() => {
    setIsOpenMenu(false);
  }, [pathname]);

  return (
    <div className="fixed w-full top-[20px] left-0 right-0 bg-white 
    z-10 md:max-w-[101.25rem] max-w-[95%] rounded-[0.75rem] mx-auto shadow-2xl">
      <header className="rounded-[0.75rem]">
        <div className="max-w-[82.5rem] mx-auto px-[1.25rem]">
          <div className="flex justify-between py-[1.5625rem]">
            <div className="flex items-center gap-4">
              <div className="md:w-auto md:h-auto w-[40px] h-[38px]"><LogoHeader /></div>
              <p className="header_title">
                Все о туризме в Рязани <br /> и Рязанской области
              </p>
            </div>
            <div className="md:flex flex-col gap-5 md:visible hidden">
              <div className="flex items-end justify-end gap-[3.125rem]">
                <div className="flex items-center gap-[0.625rem]">
                  <p className="header_title">Моб. приложение</p>
                  <div className="flex items-center gap-[0.3125rem]">
                    <a href={url.apple} target="_blank">
                      <Icons icon="apple" />
                    </a>
                    <a href={url.android} target="_blank">
                      <Icons icon="android" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-[0.625rem]">
                  <p className="header_title">Мы в соц. сетях</p>
                  <div className="flex items-center gap-[0.3125rem]">
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
              <HeaderNav />
            </div>
            <button
              className={`header-icon ${isOpenMenu && "menu-open"}`}
              onClick={onOpenMenu}
            >
              <div className="header-icon_icon">
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>
      <div className="adaptive-wrapper">
        <div className={`${isOpenMenu ? "drawer-open" : "drawer-close"}`}>
          <div className="contacts">
            <a href="tel:+74912777414" className="phone">
              +74912777414
            </a>
            <a href="mailto:rzn.visit@gmail.com" className="email">
              rzn.visit@gmail.com
            </a>
          </div>
          <div className="menu_body">
            <HeaderNavMobile />
          </div>
        </div>
      </div>
    </div>
  );
};

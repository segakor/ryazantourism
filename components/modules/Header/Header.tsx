"use client";
import { url } from "@/constants/contstants";
import "./style.css";
import { HeaderNav, HeaderNavMobile } from "./HeaderNav";
import Icons from "@/components/elements/Logo/Icons";
import LogoRzn from "@/components/elements/Logo/LogoRzn";
import { useState } from "react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onOpenMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <div className="header_wrapper">
      <header className="header">
        <div className="header_container">
          <div className="header_body">
            <div className="header_left">
              <LogoRzn />
              <p className="header_title">
                Все о туризме в Рязани <br /> и Рязанской области
              </p>
            </div>
            <div className="header_right">
              <div className="header_block_wrapper">
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

export default Header;

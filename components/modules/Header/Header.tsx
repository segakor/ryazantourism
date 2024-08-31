"use client";
import { url } from "@/constants/contstants";
import "./style.css";
import { HeaderNav, HeaderNavMobile } from "./HeaderNav";
import Icons from "@/components/elements/Logo/Icons";
import LogoHeader from "@/components/elements/Logo/LogoHeader";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LangSwitch } from "@/components/elements/LangSwitch/LangSwitch";
import Link from "next/link";

//TODO: icon в одно место

const apple = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="group-hover/item:fill-black fill-[var(--color-green)] transition-all"
  >
    <path
      d="M46.0938 0H3.90625C1.74805 0 0 1.74805 0 3.90625V46.0938C0 48.252 1.74805 50 3.90625 50H46.0938C48.252 50 50 48.252 50 46.0938V3.90625C50 1.74805 48.252 0 46.0938 0ZM25.8887 13.877C26.8066 12.7637 28.3691 11.9141 29.707 11.8164C29.9316 13.3398 29.3066 14.8242 28.4863 15.8789C27.6074 17.0117 26.0938 17.8809 24.6289 17.832C24.375 16.377 25.0586 14.8828 25.8887 13.877ZM34.1211 33.1934C33.0664 34.7949 31.582 36.7969 29.7363 36.8164C28.0957 36.8359 27.6758 35.752 25.459 35.7617C23.2422 35.7715 22.7734 36.8359 21.1328 36.8164C19.2871 36.7969 17.8809 34.9902 16.8262 33.3887C13.877 28.8965 13.5645 23.6328 15.3906 20.8301C16.6797 18.8379 18.7207 17.6758 20.6445 17.6758C22.5977 17.6758 23.8184 18.75 25.4395 18.75C27.002 18.75 27.959 17.6758 30.2148 17.6758C31.9238 17.6758 33.7305 18.6035 35.0195 20.2148C30.8008 22.5293 31.4844 28.5547 35.752 30.166C35.1562 31.4551 34.873 32.041 34.1211 33.1934Z"
      fill=""
    />
  </svg>
);

const android = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="group-hover/item:fill-black fill-[var(--color-green)] transition-all"
  >
    <path
      d="M28.2993 16.1328C27.8989 16.1328 27.5767 16.4551 27.5767 16.8555C27.5767 17.2559 27.8989 17.5781 28.2993 17.5781C28.6997 17.5781 29.022 17.2559 29.022 16.8555C29.0317 16.4551 28.7095 16.1328 28.2993 16.1328Z"
      fill=""
    />
    <path
      d="M22.5 16.1328C22.0996 16.1328 21.7773 16.4551 21.7773 16.8555C21.7773 17.2559 22.0996 17.5781 22.5 17.5781C22.9004 17.5781 23.2227 17.2559 23.2227 16.8555C23.2227 16.4551 22.9004 16.1328 22.5 16.1328Z"
      fill=""
    />
    <path
      d="M46.0938 0H3.90625C1.74805 0 0 1.74805 0 3.90625V46.0938C0 48.252 1.74805 50 3.90625 50H46.0938C48.252 50 50 48.252 50 46.0938V3.90625C50 1.74805 48.252 0 46.0938 0ZM17.6562 28.1445C17.6562 28.9453 17.002 29.5996 16.2012 29.5996C15.4004 29.5996 14.7461 28.9453 14.7461 28.1445V21.9336C14.7461 21.1328 15.4004 20.4785 16.2012 20.4785C17.002 20.4785 17.6562 21.1328 17.6562 21.9336V28.1445ZM32.1777 21.6895V22.6758V31.1328C32.1777 31.9824 31.4941 32.666 30.6445 32.666H29.541C29.5801 32.793 29.5996 32.9297 29.5996 33.0664V33.1445V33.6328V36.1328C29.5996 36.9336 28.9453 37.5879 28.1445 37.5879C27.3438 37.5879 26.6895 36.9336 26.6895 36.1328V33.6328V33.1445V33.0664C26.6895 32.9297 26.709 32.793 26.748 32.666H24.0527C24.0918 32.793 24.1113 32.9297 24.1113 33.0664V33.1445V33.6328V36.1328C24.1113 36.9336 23.457 37.5879 22.6562 37.5879C21.8555 37.5879 21.2012 36.9336 21.2012 36.1328V33.6328V33.1445V33.0664C21.2012 32.9297 21.2207 32.793 21.2598 32.666H20.1562C19.3066 32.666 18.623 31.9824 18.623 31.1328V22.6758V21.6895V20.4785H18.7305H32.0703H32.1777V21.6895ZM18.623 19.5215C18.623 17.4512 20.0098 15.6348 22.0703 14.6777L21.7969 14.2676L21.5234 13.8672L20.918 12.959C20.8496 12.8516 20.8789 12.6953 20.9863 12.627C21.0937 12.5488 21.25 12.5879 21.3184 12.6953L21.9629 13.6621L22.2363 14.0723L22.5098 14.4824C23.3887 14.1406 24.3555 13.9551 25.3906 13.9551C26.416 13.9551 27.3926 14.1406 28.2715 14.4824L28.5449 14.0723L28.8184 13.6621L29.4629 12.6953C29.5312 12.5879 29.6875 12.5488 29.7949 12.627C29.9023 12.7051 29.9414 12.8516 29.8633 12.959L29.2578 13.8672L29.0039 14.2676L28.7305 14.6777C30.7812 15.6348 32.168 17.4414 32.168 19.5215H18.623ZM36.0449 28.1445C36.0449 28.9453 35.3906 29.5996 34.5898 29.5996C33.7891 29.5996 33.1348 28.9453 33.1348 28.1445V21.9336C33.1348 21.1328 33.7891 20.4785 34.5898 20.4785C35.3906 20.4785 36.0449 21.1328 36.0449 21.9336V28.1445Z"
      fill=""
    />
  </svg>
);

const vk = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="group-hover/item:fill-black fill-[var(--color-green)] transition-all"
  >
    <path d="M12.9995 0.52002C6.10693 0.52002 0.519531 6.10742 0.519531 13C0.519531 19.8926 6.10693 25.48 12.9995 25.48C19.8921 25.48 25.4795 19.8926 25.4795 13C25.4795 6.10742 19.8921 0.52002 12.9995 0.52002ZM17.7991 14.6003C17.7991 14.6003 18.9028 15.6897 19.1745 16.1954C19.1823 16.2058 19.1862 16.2162 19.1888 16.2214C19.2993 16.4073 19.3253 16.5516 19.2707 16.6595C19.1797 16.8389 18.8677 16.9273 18.7611 16.9351H16.8111C16.6759 16.9351 16.3925 16.9 16.0493 16.6634C15.7854 16.4788 15.5254 16.1759 15.2719 15.8808C14.8936 15.4414 14.566 15.0618 14.2358 15.0618C14.1939 15.0618 14.1522 15.0683 14.1123 15.0813C13.8627 15.1619 13.5429 15.5181 13.5429 16.4671C13.5429 16.7635 13.3089 16.9338 13.1438 16.9338H12.2507C11.9465 16.9338 10.3618 16.8272 8.95783 15.3465C7.23923 13.533 5.69223 9.89562 5.67923 9.86182C5.58173 9.62652 5.78323 9.50042 6.00293 9.50042H7.97243C8.23503 9.50042 8.32083 9.66032 8.38063 9.80202C8.45083 9.96712 8.70823 10.6236 9.13073 11.362C9.81583 12.5658 10.2357 13.0546 10.5724 13.0546C10.6356 13.0539 10.6976 13.0378 10.7531 13.0078C11.1925 12.7634 11.1106 11.1969 11.0911 10.8719C11.0911 10.8108 11.0898 10.1712 10.8649 9.86442C10.7037 9.64212 10.4294 9.55762 10.263 9.52642C10.3304 9.43349 10.4191 9.35813 10.5217 9.30672C10.8233 9.15592 11.3667 9.13382 11.9062 9.13382H12.2065C12.7915 9.14162 12.9423 9.17932 13.1542 9.23262C13.5832 9.33532 13.5923 9.61222 13.5546 10.5599C13.5429 10.829 13.5312 11.1332 13.5312 11.492C13.5312 11.57 13.5273 11.6532 13.5273 11.7416C13.5143 12.2239 13.4987 12.7712 13.8393 12.9961C13.8838 13.024 13.9351 13.0388 13.9875 13.039C14.1058 13.039 14.462 13.039 15.4266 11.3841C15.7241 10.8515 15.9826 10.2979 16.2001 9.72792C16.2196 9.69412 16.2768 9.59012 16.3444 9.54982C16.3943 9.52439 16.4496 9.51145 16.5056 9.51212H18.8209C19.0731 9.51212 19.246 9.54982 19.2785 9.64732C19.3357 9.80202 19.2681 10.2739 18.2112 11.7052L17.7393 12.3279C16.7812 13.5837 16.7812 13.6474 17.7991 14.6003Z" />
  </svg>
);
const tg = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="group-hover/item:fill-black fill-[var(--color-green)] transition-all"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26 13C26 20.1796 20.1796 26 13 26C5.82029 26 0 20.1796 0 13C0 5.82029 5.82029 0 13 0C20.1796 0 26 5.82029 26 13ZM13.4658 9.59717C12.2014 10.1231 9.6743 11.2116 5.88454 12.8627C5.26913 13.1075 4.94676 13.347 4.91742 13.581C4.86782 13.9767 5.36327 14.1324 6.03791 14.3446C6.12969 14.3734 6.22478 14.4033 6.32225 14.4349C6.986 14.6507 7.87888 14.9032 8.34305 14.9132C8.76409 14.9223 9.23403 14.7488 9.75285 14.3924C13.2938 12.0022 15.1216 10.7942 15.2363 10.768C15.3172 10.7497 15.4294 10.7266 15.5055 10.7942C15.5815 10.8618 15.574 10.9897 15.5659 11.024C15.5169 11.2333 13.5721 13.0413 12.5657 13.9769C12.252 14.2687 12.0294 14.4755 11.9839 14.5228C11.882 14.6286 11.7781 14.7287 11.6783 14.8249C11.0617 15.4194 10.5992 15.8652 11.7039 16.5932C12.2348 16.943 12.6595 17.2323 13.0833 17.5209C13.5461 17.8361 14.0078 18.1505 14.6051 18.542C14.7572 18.6417 14.9025 18.7453 15.0441 18.8462C15.5827 19.2303 16.0666 19.5753 16.6644 19.5201C17.0118 19.4883 17.3706 19.1616 17.5529 18.1874C17.9835 15.8851 18.8301 10.8966 19.0258 8.84105C19.0429 8.66096 19.0213 8.43047 19.004 8.3293C18.9866 8.22812 18.9505 8.08395 18.8189 7.97723C18.6632 7.85084 18.4228 7.82419 18.3152 7.826C17.8263 7.83471 17.076 8.09555 13.4658 9.59717Z"
    />
  </svg>
);

const ok = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="group-hover/item:fill-black fill-[var(--color-green)] transition-all"
  >
    <path d="M13 0C9.412 0 6.162 1.456 3.809 3.809C1.456 6.1555 0 9.4055 0 13C0 16.5945 1.456 19.8445 3.809 22.191C6.162 24.544 9.412 26 13 26C16.588 26 19.838 24.544 22.191 22.191C24.544 19.8445 26 16.5945 26 13C26 5.8175 20.1825 0 13 0ZM12.9155 5.85C13.8905 5.85 14.8135 6.24 15.5415 6.968C16.2695 7.696 16.666 8.6775 16.666 9.698C16.666 11.7975 14.9565 13.4485 12.8635 13.4485C11.843 13.4485 10.9135 13.0585 10.231 12.2785C9.503 11.5505 9.113 10.6275 9.113 9.6005C9.1585 7.553 10.816 5.85 12.9155 5.85ZM17.056 14.8135C16.614 15.2555 16.081 15.5935 15.3465 15.8405C14.911 16.0355 14.4235 16.133 13.988 16.1785L14.8135 17.0105C15.3465 17.498 15.834 18.031 16.3215 18.5185C16.666 18.811 16.7635 19.2985 16.5685 19.6885C16.3735 20.124 15.886 20.4165 15.444 20.371C15.1515 20.371 14.9565 20.2735 14.716 20.0265C14.521 19.8315 14.326 19.6365 14.131 19.4415C13.741 19.006 13.3055 18.616 12.9155 18.1805C12.9155 18.1285 12.8635 18.1285 12.8635 18.1285L12.818 18.1805C12.233 18.759 11.648 19.344 10.9135 20.0785C10.7185 20.319 10.426 20.4165 10.1855 20.4165C10.036 20.4165 9.893 20.4165 9.7435 20.319C9.308 20.124 9.061 19.6885 9.061 19.2465C9.061 18.9085 9.256 18.6615 9.4055 18.5185C9.9385 17.9855 10.5235 17.4005 11.063 16.861L11.6935 16.2305C10.621 16.081 9.7955 15.743 9.113 15.2035L9.061 15.158C9.0155 15.0605 8.918 15.0085 8.8205 14.911C8.3785 14.4755 8.333 13.936 8.671 13.4485C8.9635 12.961 9.503 12.8635 10.036 13.1105C10.1335 13.156 10.231 13.208 10.3285 13.2535C11.843 14.2805 13.8905 14.326 15.3985 13.3055C15.5935 13.156 15.7885 13.0585 15.9835 13.013C16.471 12.9155 16.9065 13.1105 17.1535 13.5005C17.446 13.988 17.394 14.4755 17.056 14.8135ZM12.8635 11.1605C13.6955 11.1605 14.3715 10.53 14.3715 9.6525C14.3715 8.8205 13.741 8.138 12.8635 8.138C12.4735 8.138 12.0835 8.2875 11.791 8.58C11.4985 8.8725 11.3555 9.2625 11.3555 9.6525C11.3555 10.478 11.986 11.1605 12.8635 11.1605Z" />
  </svg>
);

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
    <div
      className="fixed w-full top-[20px] left-0 right-0 bg-white 
    z-10 md:max-w-[101.25rem] max-w-[95%] rounded-[0.75rem] mx-auto shadow-2xl"
    >
      <header className="rounded-[0.75rem]">
        <div className="max-w-[82.5rem] mx-auto md:px-auto px-[1.25rem]">
          <div className="flex justify-between py-[1.5625rem]">
            <div className="flex items-center gap-4">
              <div className="md:w-auto md:h-auto w-[40px] h-[38px]">
                <LogoHeader />
              </div>
              <p className="header_title">
                Все о туризме в Рязани <br /> и Рязанской области
              </p>
            </div>
            <div className="lg:flex flex-col gap-5 lg:visible hidden">
              <div className="flex items-center justify-end gap-[3.125rem]">
                <div className="flex items-center gap-[0.625rem]">
                  <p className="header_title">Моб. приложение</p>
                  <div className="flex items-center gap-[0.3125rem]">
                    <Link
                      href={url.apple}
                      target="_blank"
                      className="group/item"
                    >
                      {apple}
                    </Link>
                    <Link
                      href={url.android}
                      target="_blank"
                      className="group/item"
                    >
                      {android}
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-[0.625rem]">
                  <p className="header_title">Мы в соц. сетях</p>
                  <div className="flex items-center gap-[0.3125rem]">
                    <Link href={url.vk} target="_blank" className="group/item">
                      {vk}
                    </Link>
                    <Link href={url.tg} target="_blank" className="group/item">
                      {tg}
                    </Link>
                    <Link href={url.ok} target="_blank" className="group/item">
                      {ok}
                    </Link>
                  </div>
                </div>
                <div>
                  <LangSwitch />
                </div>
              </div>
              <HeaderNav />
            </div>
            <button
              className={`rounded-full bg-[#b9fa4f] w-[2.5rem] h-[2.5rem] 
                flex justify-center items-center z-[100] lg:hidden visible ${
                  isOpenMenu && "menu-open"
                }`}
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
          <div className="grid gap-1 mt-12 pl-4">
            <Link
              href="tel:+74912777414"
              className="font-medium 
                text-[var(--color-green)] hover:text-[var(--color-white)] transition-all text-xl mb-2"
            >
              +7 (4912) 77 74 14
            </Link>
            <Link
              href="mailto: rzn.visit@gmail.com"
              className="font-medium 
                hover:text-[var(--color-green)] transition-all text-xl"
            >
              rzn.visit@gmail.com
            </Link>
          </div>
          <div className="menu_body">
            <HeaderNavMobile />
          </div>
        </div>
      </div>
    </div>
  );
};

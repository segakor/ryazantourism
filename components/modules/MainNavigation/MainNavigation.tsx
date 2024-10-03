"use client";
import { mainNavigation } from "@/constants/contstants";
import Link from "next/link";
import { Typography } from "@/components/elements/Typography/Typography";
import Image from "next/image";
import { createShimmer } from "@/utils/shimer";

import { parseCookies } from "nookies";
import { MODE_VISUALLY_KEY_NAME } from "@/components/elements/ModeVisually/ModeVisually";
import { useEffect, useState } from "react";

export const MainNavigation = () => {
  const [modeVisually, setModeVisually] = useState("");

  useEffect(() => {
    const cookies = parseCookies();
    const value = cookies[MODE_VISUALLY_KEY_NAME];

    setModeVisually(value);
  }, []);

  const isModeEnabled = modeVisually === "1";

  return (
    <div className="grid md:gap-20 gap-10 md:mt-20 mt-10">
      <div className="grid gap-5">
        <Typography variant="h2" className="font-medium">
          Спланировать путешествие
        </Typography>
        <p className="text2">
          Собрали для вас только лучшие места, которые помогут вам насладиться
          Рязанью
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-[28px]">
        {mainNavigation.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`group/item ${(index === 0 || index === 3) && "md:col-span-2 col-span-1"
              }`}
          >
            <div className="cursor-pointer rounded-[14px] overflow-hidden relative">
              <div className={`w-full relative  md:pt-[408px] pt-[250px]`}>
                <Image
                  src={item.imgUrl}
                  alt="img"
                  objectFit="cover"
                  fill
                  className={`w-full h-full top-0 left-0 object-cover rounded-rounded-t-lg 
                    ${isModeEnabled ? "brightness-[0.25]" : "brightness-50"
                    } group-hover/item:scale-[115%] transition-all duration-1000 group-hover/item:duration-1000`}
                  placeholder={`data:image/svg+xml;base64,${createShimmer()}`}
                  priority
                  quality={10}
                  unoptimized
                />
              </div>
              <div className="absolute w-full md:p-10 p-5 h-full flex justify-between flex-col top-0 left-0">
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
                <div className="text-white grid gap-5">
                  <Typography variant="h3" className="font-medium">
                    {item.title}
                  </Typography>
                  <p className="text2">{item.desc}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

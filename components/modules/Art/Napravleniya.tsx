/* eslint-disable @next/next/no-img-element */

import { Typography } from "@/components/elements/Typography/Typography";
import { napravleniyaArt } from "@/constants/contstants";

/* eslint-disable jsx-a11y/alt-text */
export const Napravleniya = () => {

  return (
    <div className="overflow-x-scroll no-scrollbar">
      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPathDirectionCard" clipPathUnits="objectBoundingBox">
            <path
              d="M0.949,0 H0.718 C0.69,0,0.667,0.023,0.667,0.051 V0.051 C0.667,0.08,0.644,0.103,0.615,0.103 H0.051 C0.023,0.103,0,0.126,0,0.154 V0.949 C0,0.977,0.023,1,0.051,1 H0.949 C0.977,1,1,0.977,1,0.949 V0.051 C1,0.023,0.977,0,0.949,0"
              fill="black"
            ></path>
          </clipPath>
        </defs>
      </svg>
      <Typography variant="h2" className="mb-16 text-center font-medium">Направления деятельности</Typography>
      <div className="flex gap-5 md:justify-center md:flex-wrap justify-normal flex-nowrap overflow-x-scroll no-scrollbar">
        {napravleniyaArt.map((item, index) => (
          <div
            key={index}
            className="flex-[0_0_19.6875rem] md:flex-[0_1_23rem] group/item flex-col min-h-[24.375rem] bg-[#f0f0f0] rounded-xl hover:bg-[var(--color-green)] transition-all"
            style={{
              clipPath: 'url("#svgPathDirectionCard")',
            }}
          >
            <div className="flex justify-end items-end mt-4 md:pr-7 pr-5">
              <div className="flex items-center justify-center w-[4.375rem] h-[4.375rem] bg-white rounded-lg">
                <img src={item.imgUrl} />
              </div>
            </div>
            <div className="p-10">
              <div className="text-2xl font-medium mb-5">{item.title}</div>
              <p className="text-base text-gray-400 group-hover/item:text-black transition-all">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

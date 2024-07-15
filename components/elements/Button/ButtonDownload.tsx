import Link from "next/link";

export const ButtonDownload = ({ link }: { link: string }) => {
  return (
    <>
      <Link href={link} target="_blank">
        <div className="group/item bg-white hover:bg-slate-400 hover:text-white transition-all py-4 px-5 inline-block rounded-full ">
          <div className="flex gap-2 items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_635_2484)">
                <path
                  d="M10.5483 0.649414L10.5483 -0.158667L8.93215 -0.158667L8.93215 0.649414L10.5483 0.649414ZM9.16883 13.039C9.48441 13.3546 9.99606 13.3546 10.3116 13.039L15.4542 7.8964C15.7698 7.58083 15.7698 7.06918 15.4542 6.7536C15.1387 6.43803 14.627 6.43803 14.3114 6.7536L9.74023 11.3248L5.16904 6.7536C4.85346 6.43803 4.34181 6.43803 4.02624 6.7536C3.71066 7.06918 3.71066 7.58083 4.02624 7.8964L9.16883 13.039ZM8.93215 0.649414L8.93215 12.4676L10.5483 12.4676L10.5483 0.649414L8.93215 0.649414Z"
                  fill="black"
                  className="fill-black group-hover/item:fill-white"
                />
                <path
                  d="M1.55859 14.2858V18.0231C1.55859 18.4694 1.92038 18.8312 2.36667 18.8312H18.0232C18.4695 18.8312 18.8313 18.4694 18.8313 18.0231V14.2858"
                  stroke="black"
                  stroke-width="1.61616"
                  stroke-linecap="round"
                  className="stroke-black group-hover/item:stroke-white"
                />
              </g>
              <defs>
                <clipPath id="clip0_635_2484">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Скачать
          </div>
        </div>
      </Link>
    </>
  );
};

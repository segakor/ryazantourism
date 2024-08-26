import { Typography } from "@/components/elements/Typography/Typography";
import { promTurizmNavigation } from "@/constants/contstants";
import Link from "next/link";

export const PromTurizmNavigation = () => {
  const dictIcon = [
    <svg
      key="0"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M73.2445 65.625C68.96 58.1053 62.2697 52.2461 54.2508 48.9906C58.2385 45.9998 61.1842 41.8301 62.6704 37.0721C64.1567 32.3141 64.1083 27.2091 62.532 22.4802C60.9557 17.7513 57.9314 13.6382 53.8876 10.7236C49.8438 7.80899 44.9855 6.2406 40.0007 6.2406C35.016 6.2406 30.1577 7.80899 26.1139 10.7236C22.0701 13.6382 19.0458 17.7513 17.4695 22.4802C15.8932 27.2091 15.8448 32.3141 17.3311 37.0721C18.8173 41.8301 21.763 45.9998 25.7507 48.9906C17.7318 52.2461 11.0415 58.1053 6.757 65.625C6.49151 66.0519 6.31457 66.5278 6.23669 67.0244C6.1588 67.521 6.18157 68.0283 6.30363 68.5159C6.42569 69.0036 6.64455 69.4617 6.94721 69.8631C7.24987 70.2645 7.63014 70.6009 8.06542 70.8524C8.5007 71.1039 8.9821 71.2653 9.481 71.327C9.9799 71.3887 10.4861 71.3495 10.9696 71.2117C11.453 71.0739 11.9038 70.8402 12.2951 70.5247C12.6865 70.2092 13.0104 69.8182 13.2476 69.375C18.9101 59.5875 28.9101 53.75 40.0007 53.75C51.0914 53.75 61.0914 59.5906 66.7539 69.375C67.268 70.2016 68.0834 70.796 69.0278 71.0323C69.9721 71.2687 70.9714 71.1286 71.8143 70.6416C72.6572 70.1546 73.2777 69.3589 73.5446 68.4227C73.8115 67.4865 73.7039 66.4833 73.2445 65.625ZM23.7507 30C23.7507 26.786 24.7038 23.6443 26.4894 20.972C28.2749 18.2997 30.8128 16.2169 33.7821 14.9869C36.7514 13.757 40.0188 13.4352 43.171 14.0622C46.3232 14.6892 49.2186 16.2369 51.4912 18.5095C53.7638 20.7821 55.3115 23.6776 55.9385 26.8298C56.5655 29.9819 56.2437 33.2493 55.0138 36.2186C53.7839 39.1879 51.7011 41.7258 49.0288 43.5114C46.3565 45.2969 43.2147 46.25 40.0007 46.25C35.6925 46.245 31.5621 44.5314 28.5157 41.485C25.4694 38.4386 23.7557 34.3082 23.7507 30Z"
        fill="white"
      />
    </svg>,
    <svg
      key="1"
      width="78"
      height="59"
      viewBox="0 0 78 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50.3707 43.5937C52.6775 41.335 54.2592 38.4403 54.9141 35.2789C55.569 32.1174 55.2673 28.8326 54.0475 25.8434C52.8277 22.8541 50.7452 20.296 48.0655 18.4952C45.3858 16.6945 42.2304 15.7328 39.0019 15.7328C35.7734 15.7328 32.618 16.6945 29.9383 18.4952C27.2586 20.296 25.1761 22.8541 23.9563 25.8434C22.7365 28.8326 22.4348 32.1174 23.0897 35.2789C23.7446 38.4403 25.3263 41.335 27.6331 43.5937C23.7275 45.6701 20.4802 48.7972 18.2581 52.6218C17.7823 53.4817 17.663 54.4939 17.9259 55.4408C18.1888 56.3877 18.8129 57.1936 19.6639 57.685C20.5149 58.1765 21.5248 58.3142 22.4764 58.0686C23.4279 57.823 24.245 57.2138 24.7519 56.3718C26.2172 53.896 28.3022 51.8446 30.8015 50.4196C33.3007 48.9947 36.1281 48.2453 39.005 48.2453C41.882 48.2453 44.7093 48.9947 47.2086 50.4196C49.7078 51.8446 51.7928 53.896 53.2581 56.3718C53.4994 56.8078 53.8251 57.1912 54.2162 57.4999C54.6073 57.8085 55.056 58.0361 55.536 58.1694C56.0161 58.3027 56.5179 58.339 57.0121 58.2761C57.5063 58.2133 57.9831 58.0526 58.4145 57.8035C58.846 57.5543 59.2234 57.2217 59.5249 56.8251C59.8263 56.4284 60.0457 55.9756 60.1702 55.4932C60.2947 55.0108 60.3219 54.5084 60.25 54.0154C60.1782 53.5224 60.0089 53.0487 59.7519 52.6218C57.5282 48.7963 54.2786 45.6691 50.3707 43.5937ZM30.2519 32C30.2519 30.2694 30.7651 28.5777 31.7265 27.1387C32.688 25.6998 34.0546 24.5783 35.6534 23.916C37.2523 23.2538 39.0116 23.0805 40.7089 23.4181C42.4063 23.7557 43.9654 24.5891 45.1891 25.8128C46.4128 27.0365 47.2462 28.5956 47.5838 30.2929C47.9214 31.9903 47.7481 33.7496 47.0858 35.3484C46.4236 36.9473 45.3021 38.3139 43.8631 39.2753C42.4242 40.2368 40.7325 40.75 39.0019 40.75C36.6813 40.75 34.4557 39.8281 32.8147 38.1872C31.1738 36.5462 30.2519 34.3206 30.2519 32ZM76.255 34.9968C75.8612 35.293 75.4128 35.5086 74.9355 35.6313C74.4583 35.754 73.9615 35.7815 73.4737 35.7121C72.9858 35.6428 72.5164 35.4779 72.0923 35.227C71.6681 34.9762 71.2976 34.6441 71.0019 34.25C68.3988 30.7843 64.7988 28.1281 61.8363 27.4875C61.0485 27.3171 60.3367 26.8975 59.8061 26.2908C59.2756 25.6841 58.9546 24.9226 58.8908 24.1192C58.827 23.3158 59.0237 22.5132 59.4518 21.8303C59.8799 21.1475 60.5166 20.6207 61.2675 20.3281C62.2025 19.9631 63.0358 19.3784 63.697 18.6232C64.3582 17.8681 64.8278 16.9649 65.0661 15.9899C65.3044 15.015 65.3044 13.9969 65.0661 13.022C64.8278 12.047 64.3582 11.1438 63.697 10.3887C63.0358 9.63354 62.2025 9.04878 61.2675 8.68381C60.3326 8.31884 59.3234 8.18441 58.3255 8.29189C57.3276 8.39937 56.3703 8.74559 55.5345 9.30128C54.6987 9.85696 54.009 10.6058 53.5238 11.4843C53.2937 11.9296 52.9766 12.3242 52.5914 12.6448C52.2062 12.9654 51.7607 13.2056 51.2811 13.3511C50.8015 13.4966 50.2976 13.5444 49.7992 13.4919C49.3007 13.4393 48.8179 13.2874 48.3792 13.0451C47.9405 12.8027 47.5548 12.4749 47.245 12.081C46.9351 11.6871 46.7074 11.2351 46.5752 10.7516C46.443 10.2682 46.4091 9.76317 46.4754 9.2664C46.5417 8.76962 46.7069 8.29118 46.9613 7.85934C47.8892 6.21856 49.1446 4.78609 50.6495 3.65092C52.1543 2.51575 53.8765 1.70212 55.7091 1.26059C57.5417 0.819047 59.4454 0.759024 61.3022 1.08425C63.1589 1.40947 64.9289 2.11299 66.5023 3.15111C68.0757 4.18923 69.4188 5.53977 70.4483 7.11884C71.4777 8.69792 72.1715 10.4718 72.4865 12.3303C72.8015 14.1888 72.731 16.0922 72.2794 17.9223C71.8278 19.7524 71.0047 21.4701 69.8613 22.9687C72.6127 24.8017 75.0282 27.0945 77.0019 29.7468C77.599 30.5421 77.8557 31.542 77.7156 32.5265C77.5756 33.511 77.0502 34.3996 76.255 34.9968ZM16.1675 27.4968C13.205 28.1375 9.60502 30.7937 7.0019 34.2625C6.40309 35.0577 5.5129 35.5825 4.52716 35.7214C3.54142 35.8603 2.54088 35.6019 1.74565 35.0031C0.950412 34.4043 0.425624 33.5141 0.28673 32.5284C0.147835 31.5426 0.406213 30.5421 1.00502 29.7468C2.97965 27.0954 5.39497 24.8027 8.14565 22.9687C7.00222 21.4701 6.17913 19.7524 5.72751 17.9223C5.2759 16.0922 5.20541 14.1888 5.52041 12.3303C5.83541 10.4718 6.52918 8.69792 7.55863 7.11884C8.58807 5.53977 9.93121 4.18923 11.5046 3.15111C13.078 2.11299 14.848 1.40947 16.7048 1.08425C18.5615 0.759024 20.4653 0.819047 22.2978 1.26059C24.1304 1.70212 25.8526 2.51575 27.3575 3.65092C28.8623 4.78609 30.1177 6.21856 31.0456 7.85934C31.3 8.29118 31.4652 8.76962 31.5315 9.2664C31.5979 9.76317 31.5639 10.2682 31.4317 10.7516C31.2995 11.2351 31.0718 11.6871 30.7619 12.081C30.4521 12.4749 30.0664 12.8027 29.6277 13.0451C29.189 13.2874 28.7062 13.4393 28.2078 13.4919C27.7093 13.5444 27.2054 13.4966 26.7259 13.3511C26.2463 13.2056 25.8007 12.9654 25.4155 12.6448C25.0303 12.3242 24.7133 11.9296 24.4831 11.4843C23.9979 10.6058 23.3082 9.85696 22.4724 9.30128C21.6366 8.74559 20.6793 8.39937 19.6814 8.29189C18.6835 8.18441 17.6744 8.31884 16.7394 8.68381C15.8044 9.04878 14.9711 9.63354 14.3099 10.3887C13.6487 11.1438 13.1791 12.047 12.9408 13.022C12.7025 13.9969 12.7025 15.015 12.9408 15.9899C13.1791 16.9649 13.6487 17.8681 14.3099 18.6232C14.9711 19.3784 15.8044 19.9631 16.7394 20.3281C17.4904 20.6207 18.1271 21.1475 18.5552 21.8303C18.9833 22.5132 19.18 23.3158 19.1161 24.1192C19.0523 24.9226 18.7314 25.6841 18.2008 26.2908C17.6703 26.8975 16.9584 27.3171 16.1706 27.4875L16.1675 27.4968Z"
        fill="white"
      />
    </svg>,
    <svg
      key="2"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M72.5 13.75H50C48.1258 13.7494 46.2714 14.1332 44.5514 14.8776C42.8314 15.6221 41.2824 16.7113 40 18.0781C38.7176 16.7113 37.1686 15.6221 35.4486 14.8776C33.7286 14.1332 31.8742 13.7494 30 13.75H7.5C6.50544 13.75 5.55161 14.1451 4.84835 14.8483C4.14509 15.5516 3.75 16.5054 3.75 17.5V62.5C3.75 63.4946 4.14509 64.4484 4.84835 65.1516C5.55161 65.8549 6.50544 66.25 7.5 66.25H30C31.6576 66.25 33.2473 66.9085 34.4194 68.0806C35.5915 69.2527 36.25 70.8424 36.25 72.5C36.25 73.4946 36.6451 74.4484 37.3484 75.1516C38.0516 75.8549 39.0054 76.25 40 76.25C40.9946 76.25 41.9484 75.8549 42.6516 75.1516C43.3549 74.4484 43.75 73.4946 43.75 72.5C43.75 70.8424 44.4085 69.2527 45.5806 68.0806C46.7527 66.9085 48.3424 66.25 50 66.25H72.5C73.4946 66.25 74.4484 65.8549 75.1516 65.1516C75.8549 64.4484 76.25 63.4946 76.25 62.5V17.5C76.25 16.5054 75.8549 15.5516 75.1516 14.8483C74.4484 14.1451 73.4946 13.75 72.5 13.75ZM30 58.75H11.25V21.25H30C31.6576 21.25 33.2473 21.9085 34.4194 23.0806C35.5915 24.2527 36.25 25.8424 36.25 27.5V60.2531C34.3155 59.263 32.1731 58.7478 30 58.75ZM68.75 58.75H50C47.8262 58.7485 45.6835 59.266 43.75 60.2594V27.5C43.75 25.8424 44.4085 24.2527 45.5806 23.0806C46.7527 21.9085 48.3424 21.25 50 21.25H68.75V58.75ZM51.25 30H61.25C62.2446 30 63.1984 30.3951 63.9016 31.0984C64.6049 31.8016 65 32.7554 65 33.75C65 34.7446 64.6049 35.6984 63.9016 36.4017C63.1984 37.1049 62.2446 37.5 61.25 37.5H51.25C50.2554 37.5 49.3016 37.1049 48.5984 36.4017C47.8951 35.6984 47.5 34.7446 47.5 33.75C47.5 32.7554 47.8951 31.8016 48.5984 31.0984C49.3016 30.3951 50.2554 30 51.25 30ZM65 46.25C65 47.2446 64.6049 48.1984 63.9016 48.9016C63.1984 49.6049 62.2446 50 61.25 50H51.25C50.2554 50 49.3016 49.6049 48.5984 48.9016C47.8951 48.1984 47.5 47.2446 47.5 46.25C47.5 45.2554 47.8951 44.3016 48.5984 43.5984C49.3016 42.8951 50.2554 42.5 51.25 42.5H61.25C62.2446 42.5 63.1984 42.8951 63.9016 43.5984C64.6049 44.3016 65 45.2554 65 46.25Z"
        fill="white"
      />
    </svg>,
    <svg
      key="3"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.187 16.4439L41.187 6.4439C40.4187 6.18455 39.5865 6.18455 38.8182 6.4439L8.81821 16.4439C8.10238 16.681 7.47465 17.1284 7.01697 17.7276C6.55928 18.3269 6.2929 19.0503 6.25259 19.8033C6.24914 19.8689 6.24914 19.9346 6.25259 20.0001V45.0001C6.25259 45.9947 6.64767 46.9485 7.35094 47.6518C8.0542 48.3551 9.00802 48.7501 10.0026 48.7501C10.9971 48.7501 11.951 48.3551 12.6542 47.6518C13.3575 46.9485 13.7526 45.9947 13.7526 45.0001V25.2033L21.162 27.672C18.8625 32.0736 18.1791 37.1421 19.2309 41.9955C20.2826 46.8488 23.0029 51.1798 26.9182 54.2345C21.7945 56.7611 17.4583 60.6392 14.3776 65.4501C14.1002 65.8625 13.9075 66.3258 13.8107 66.8133C13.7139 67.3008 13.715 67.8026 13.8139 68.2896C13.9128 68.7767 14.1075 69.2392 14.3867 69.6503C14.6659 70.0614 15.024 70.413 15.4403 70.6845C15.8565 70.956 16.3226 71.142 16.8114 71.2318C17.3002 71.3216 17.8019 71.3133 18.2875 71.2075C18.7731 71.1017 19.2328 70.9004 19.6399 70.6153C20.047 70.3303 20.3933 69.9671 20.6588 69.547C25.1182 62.6845 32.1901 58.7501 40.0026 58.7501C47.8151 58.7501 54.887 62.6845 59.362 69.547C59.6275 69.9671 59.9738 70.3303 60.3809 70.6153C60.788 70.9004 61.2477 71.1017 61.7333 71.2075C62.2189 71.3133 62.7206 71.3216 63.2094 71.2318C63.6982 71.142 64.1643 70.956 64.5805 70.6845C64.9968 70.413 65.3549 70.0614 65.6341 69.6503C65.9133 69.2392 66.108 68.7767 66.2069 68.2896C66.3058 67.8026 66.3069 67.3008 66.2101 66.8133C66.1133 66.3258 65.9206 65.8625 65.6432 65.4501C62.5595 60.6336 58.2175 56.752 53.087 54.2252C57.0023 51.1704 59.7225 46.8395 60.7743 41.9861C61.8261 37.1327 61.1427 32.0642 58.8432 27.6626L71.187 23.547C71.9327 23.2975 72.5811 22.8199 73.0405 22.1818C73.5 21.5436 73.7472 20.7771 73.7472 19.9908C73.7472 19.2044 73.5 18.438 73.0405 17.7998C72.5811 17.1616 71.9327 16.684 71.187 16.4345V16.4439ZM40.0026 13.9439L58.1432 20.0001L40.0026 26.047L21.8776 20.0001L40.0026 13.9439ZM53.7526 37.5001C53.753 39.6359 53.2559 41.7423 52.3006 43.6525C51.3454 45.5628 49.9584 47.2242 48.2494 48.5051C46.5404 49.7861 44.5566 50.6513 42.4551 51.0322C40.3536 51.4132 38.1923 51.2994 36.1425 50.6998C34.0926 50.1002 32.2106 49.0314 30.6457 47.578C29.0807 46.1246 27.8759 44.3267 27.1266 42.3267C26.3773 40.3267 26.1042 38.1797 26.3289 36.0558C26.5537 33.932 27.2701 31.8896 28.4213 30.0908L38.8182 33.5564C39.5867 33.8146 40.4185 33.8146 41.187 33.5564L51.5838 30.0908C53.0019 32.3017 53.7547 34.8735 53.7526 37.5001Z"
        fill="white"
      />
    </svg>,
  ];
  return (
    <section className="grid_layout">
      <div className="md:grid-cols-2 grid-cols-1 grid gap-7 color text-white md:my-40 my-20">
        {promTurizmNavigation.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="group/item cursor-pointer flex md:h-[510px] h-96 rounded-[40px] md:p-10 p-5 color-white bg-cover shadow-lg"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 5.16%, rgba(0, 0, 0, 0.8) 78.18%, rgba(0, 0, 0, 0.8) 78.19%), url(${item.imgUrl})`,
            }}
          >
            <div className={`flex flex-col justify-between w-full`}>
              <div className="flex justify-end">
                <div className="md:w-20 md:h-20 bg-white flex justify-center rounded-full items-center group-hover/item:bg-[var(--color-green)] transition-all">
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
              <div className="grid gap-5">
                {dictIcon[index]}
                <Typography variant="h3" className="font-medium">
                  {item.title}
                </Typography>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

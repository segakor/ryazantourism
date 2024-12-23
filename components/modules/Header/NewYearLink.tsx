import Link from "next/link";

export const NewYearLink = () => {
  return (
    <Link
      href={"https://new-year.ryazantourism.ru?from=header"}
      target='_blank'
      className="flex items-center gap-[0.3125rem] whitespace-nowrap 
font-medium transition-all cursor-pointer group/item text-[#5363F7] relative text-sm hover:text-[#96ee05]"
    >
      <span className="menu_link">Зима в Рязани</span>
      <svg
        className="mb-1"
        width="9"
        height="9"
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="group-hover/item:fill-[var(--color-green)] fill-[#5363F7] transition-all"
          d="M2.84141 1.30761C2.96444 0.538405 3.9986 0.373614 4.35461 1.06649L5.16071 2.63538C5.27801 2.86369 5.49702 3.0225 5.75048 3.06303L7.4922 3.3416C8.26141 3.46463 8.4262 4.49879 7.73332 4.8548L6.16443 5.6609C5.93612 5.7782 5.77732 5.99721 5.73678 6.25067L5.45821 7.99239C5.33518 8.7616 4.30102 8.92639 3.94502 8.23351L3.13892 6.66462C3.02161 6.43632 2.80261 6.27751 2.54915 6.23697L0.807423 5.9584C0.0382141 5.83538 -0.126576 4.80121 0.566302 4.44521L2.13519 3.63911C2.3635 3.52181 2.52231 3.3028 2.56284 3.04934L2.84141 1.30761Z"
          fill="none"
        />
      </svg>
    </Link>
  );
};

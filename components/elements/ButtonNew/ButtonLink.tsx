import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

export const ButtonLink = ({
  href,
  target = "_self",
  variant,
  children,
  wide,
}: {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  variant: "whiteGreen" | "greenBlack" | "greenWhite";
  children: ReactNode;
  wide?: boolean;
}) => {
  const dictColor = {
    whiteGreen: "bg-[var(--color-white)] hover:bg-[var(--color-green)] ",
    greenBlack:
      "bg-[var(--color-green)] hover:bg-[var(--color-black)] hover:text-white",
    greenWhite: "bg-[var(--color-green)] hover:bg-[var(--color-white)]",
  };

  const display = wide ? "flex justify-center" : "inline-block";

  return (
    <Link href={href} target={target}>
      <div
        className={`group/item text-black ${dictColor[variant]}
        transition-all md:py-5 py-3 md:px-10 px-8 rounded-full ${display}`}
      >
        <div className="flex gap-2 items-center">{children}</div>
      </div>
    </Link>
  );
};

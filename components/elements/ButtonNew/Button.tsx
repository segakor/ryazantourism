import { ReactNode } from "react";

export const Button = ({
  variant,
  children,
  wide,
  onClick,
  className,
}: {
  variant: "whiteGreen" | "greenBlack" | "greenWhite";
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  wide?: boolean;
  className?: string;
}) => {
  const dictColor = {
    whiteGreen: "bg-[var(--color-white)] hover:bg-[var(--color-green)] ",
    greenBlack:
      "bg-[var(--color-green)] hover:bg-[var(--color-black)] hover:text-white",
    greenWhite: "bg-[var(--color-green)] hover:bg-[var(--color-white)]",
  };

  const display = wide ? "flex justify-center" : "inline-block";

  return (
    <button
      onClick={onClick}
      className={`group/item text-black ${dictColor[variant]}
        transition-all md:py-5 py-3 md:px-10 px-8 rounded-full ${display} cursor-pointer ${className}`}
    >
      <div className="flex gap-2 items-center">{children}</div>
    </button>
  );
};

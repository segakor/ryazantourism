import Link from "next/link";
import "./style.css";
import { ReactNode } from "react";

const LinkButton = ({
  children,
  target = "_self",
  href,
  isBlackHover,
}: {
  children: ReactNode;
  target?: "_blank" | "_self";
  href?:string;
  isBlackHover?: boolean;
}) => {
  return (
    <Link
      className={`button_wrapper ${isBlackHover && "black_hover"}`}
      target={target}
      href={href || ''}
    >
      <div className="text4">{children}</div>
    </Link>
  );
};

export default LinkButton;

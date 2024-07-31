import { ReactNode } from "react";

type Props = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
  id?: string;
};
export const Typography = ({ variant, children, className, id }: Props) => {
  if (variant === "h1") {
    return (
      <h1
        id={id}
        className={`md:text-[60px] text-[36px] ${className ? className : ""}`}
      >
        {children}
      </h1>
    );
  }
  if (variant === "h2") {
    return (
      <h2
        id={id}
        className={`md:text-[60px] text-[40px] ${className ? className : ""}`}
      >
        {children}
      </h2>
    );
  }
  if (variant === "h3") {
    return (
      <h3
        id={id}
        className={`md:text-[40px] text-[30px] ${className ? className : ""}`}
      >
        {children}
      </h3>
    );
  }
  if (variant === "h4") {
    return (
      <h4
        id={id}
        className={`md:text-[32px] text-[28px] ${className ? className : ""}`}
      >
        {children}
      </h4>
    );
  }
  if (variant === "h5") {
    return (
      <h5
        id={id}
        className={`md:text-[20px] text-[20px] ${className ? className : ""}`}
      >
        {children}
      </h5>
    );
  }
  if (variant === "h6") {
    return (
      <h5
        id={id}
        className={`md:text-[16px] text-[16px] ${className ? className : ""}`}
      >
        {children}
      </h5>
    );
  }
  return <>{children}</>;
};

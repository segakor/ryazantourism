import Link from "next/link";
import Image from "next/image";

const LogoRzn = () => (
  <Link className="logo" href="/">
    <Image
      src="/logo.svg"
      alt="Логотип компании"
      className={"header_logo"}
      width={40}
      height={40}
      priority
    />
  </Link>
);

export default LogoRzn;

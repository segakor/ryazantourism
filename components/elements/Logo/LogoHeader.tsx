import Link from "next/link";
import Image from "next/image";

const LogoHeader = () => (
  <Link className="logo" href="/">
    <Image
      src="/logo.svg"
      alt="Логотип"
      width={69}
      height={66}
      priority
      className="logo"
    />
  </Link>
);

export default LogoHeader;

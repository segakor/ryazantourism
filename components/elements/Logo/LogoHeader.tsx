import Link from "next/link";
import Image from "next/image";

const LogoHeader = () => (
  <Link className="logo" href="/">
    <Image
      src="/logo.svg"
      alt="Логотип компании"
      width={69}
      height={66}
      priority
    />
  </Link>
);

export default LogoHeader;

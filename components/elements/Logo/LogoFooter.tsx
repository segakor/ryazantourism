import Link from "next/link";
import Image from "next/image";

const LogoFooter = () => (
  <Link className="logo" href="/">
    <Image
      src="/logoFooter.svg"
      alt="logo"
      width={69}
      height={66}
      priority
    />
  </Link>
);

export default LogoFooter;

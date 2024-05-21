import Link from "next/link";
import "./style.css";

export const AddressBlock = ({
  text,
  link,
}: {
  text: string;
  link: string;
}) => {
  return (
    <div className="note-text address_block">
      {text} {link && <Link href={link}>ссылка</Link>}
    </div>
  );
};

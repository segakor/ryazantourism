import Link from "next/link";
import "./style.css";

export const AdressBlock = ({
  text,
  link,
}: {
  text: string;
  link: string;
}) => {
  return (
    <div className="note-text adress_block">
      {text} {link && <Link href={link}>ссылка</Link>}
    </div>
  );
};

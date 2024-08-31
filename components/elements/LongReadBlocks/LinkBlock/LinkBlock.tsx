import Link from "next/link";
import { Typography } from "../../Typography/Typography";

export const LinkBlock = ({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) => {
  return (
    <Link href={link} target="_black">
      <div className="p-[30px] bg-[#f5f5f5] rounded-[30px] cursor-pointer hover:bg-[var(--color-green)] transition-all">
        <div className="flex md:flex-row justify-between md:gap-[60px] gap-5 flex-col">
          <div className="grid md:gap-0 gap-2">
            <Typography variant="h5" className="font-semibold">
              {title}
            </Typography>
            <div className="note-text">{desc}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

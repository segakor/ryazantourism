import Link from "next/link";
import { TDocument } from "@/types/types";

//TODO:файлы скачать
const Document = ({ item }: { item: TDocument }) => {
  return (
    <Link href={item.link} target="_blank">
      <div className="rounded-[20px] p-[30px] bg-[#fff] grid gap-6 relative hover:shadow-xl transition-shadow group/item h-full">
        <div className="flex items-center gap-4">
          <div className="text-[red]">{item.type.toUpperCase()}</div>
          <div className="opacity-[0.5]">{item.year}</div>
        </div>
        <div>{item.name}</div>
        <div>
          <div
            className="bg-[#f2f2f2] group-hover/item:bg-[var(--color-green)] group-hover/item:text-black text-black transition-all
               py-4 px-10 inline-block rounded-full "
          >
            <div className="flex gap-2 items-center">Скачать</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const Documents = ({ data }: { data: TDocument[] }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {data.map((item, index) => (
        <Document item={item} key={index} />
      ))}
    </div>
  );
};

import dogFrendli from "../../../public/tags/dogFrendli.svg";
import kuhnya from "../../../public/tags/kuhnya.svg";
import vegan from "../../../public/tags/vegan.svg";
import kultura from "../../../public/tags/kultura.svg";
import otdyhsdetmi from "../../../public/tags/otdyhsdetmi.svg";
import priroda from "../../../public/tags/priroda.svg";
import program from "../../../public/tags/program.svg";
import pushkin from "../../../public/tags/pushkin.svg";
import rekomenduem from "../../../public/tags/rekomenduem.svg";
import zavtrak from "../../../public/tags/zavtrak.svg";

import Image from "next/image";
import { TagList } from "@/types/types";

const tagsMap = {
  1: vegan,
  2: zavtrak,
  3: dogFrendli,
  4: otdyhsdetmi,
  5: kultura,
  6: pushkin,
  7: kuhnya,
  8: priroda,
  9: rekomenduem,
  10: program,
};

const tagsText = {
  1: "Гостеприимные места для тех, кто не ест мясо",
  2: "Лучшие варианты для самого вкусного начала дня",
  3: "Здесь всегда рады четвероногим и хвостатым гостям",
  4: "Развлечения для взрослых и маленьких путешественников",
  5: "Объекты культурного досуга Рязани от А до Я",
  6: "Здесь принимают к оплате Пушкинскую карту",
  7: "Заведения, где готовят локальные блюда и ценят региональные продукты",
  8: "Зеленые локации для отдыха от городской суеты",
  9: "Проверили сами и советуем всем",
  10: "«Выгодный путь» — скидки и предложения наших партнеров для гостей региона",
};
/* const tagsMap = {
  dogFrendli: dogFrendli,
  kuhnya: kuhnya,
  vegan: vegan,
  kultura: kultura,
  otdyhsdetmi: otdyhsdetmi,
  priroda: priroda,
  program: program,
  pushkin: pushkin,
  rekomenduem: rekomenduem,
  zavtrak: zavtrak,
}; */

//TODO: поправить ховер на центр

export const Tag = ({ tag, sizeTag }: { tag: TagList; sizeTag?: string }) => {
  return (
    <div className="relative cursor-pointer group/item2">
      <Image
        priority
        src={tagsMap[tag]}
        alt={"tag"}
        width={Number(sizeTag)}
      />
      <div className="group-hover/item2:opacity-100 opacity-0 absolute bg-white shadow-2xl mt-3 ml-[-100%]  transition-all w-[270px] p-6 rounded-[0.875rem] pointer-events-none cursor-default group-hover/item2:pointer-events-auto">
        <div className="flex flex-col justify-center gap-4 items-center">
          <div className="m-w-[66px]">
            <Image priority src={tagsMap[tag]} alt={"tag"} width={66} />
          </div>
          <div className="text-black text-center opacity-60 font-medium">
            {tagsText[tag]}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Tags = ({
  tags,
  sizeTag,
}: {
  tags: TagList[];
  sizeTag?: string;
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags?.map((tag, index) => (
        <Tag tag={tag} key={index} sizeTag={sizeTag}/>
      ))}
    </div>
  );
};

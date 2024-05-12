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
import "./style.css";

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

export const Tag = ({ tag }: { tag: TagList }) => {
  return (
    <div className="tag">
      <Image priority src={tagsMap[tag]} alt={"tag"} />
      <div className="tag_desc">
        <h5 className="h5">{tag}</h5>
      </div>
    </div>
  );
};

export const Tags = ({ tags }: { tags: TagList[] }) => {
  return (
    <div className="tags">
      {tags?.map((tag, index) => (
        <Tag tag={tag} key={index} />
      ))}
    </div>
  );
};

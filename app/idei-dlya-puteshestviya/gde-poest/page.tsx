import { HeroPage } from "@/components/modules/HeroPage";

import type { Metadata } from "next";
import Body from "./body";
import { ResponsePlaceCard } from "@/types/types";
import { API_URL } from "@/constants/apiUrl";

export const metadata: Metadata = {
  title: "Где поесть? - Всё о туризме в Рязани и Рязанской области",
};

async function getPlaceCard() {
  const response = await fetch(API_URL.GDE_POEST);
  return response.json();
}

const Page = async () => {
  const cards = (await getPlaceCard()) as ResponsePlaceCard;

  return (
    <div>
      <HeroPage
        imgUrl="/heroPages/idei-dlya-puteshestviya/gde-poest.jpg"
        title="Где поесть?"
        desc="Самые вкусные заведения Рязанской области"
      />
      <Body data={cards.data} />
    </div>
  );
};

export default Page;

import type { Metadata } from "next";
import Loading from "./loading";
import { Suspense } from "react";
import Body from "./body";
import { HeroPage } from "@/components/modules/HeroPage";
import { news } from "@/constants/pages/ty-s-mestnym/novosri-regiona";

export const metadata: Metadata = {
  title: "Новости региона - Всё о туризме в Рязани и Рязанской области",
};

const Page = async () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <HeroPage
          imgUrl="/heroPages/ty-s-mestnym/cit.jpg"
          title="Новости региона"
        />
        <Body data={news.reverse()}/>
      </Suspense>
    </>
  );
};

export default Page;

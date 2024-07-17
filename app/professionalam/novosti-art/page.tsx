import type { Metadata } from "next";
import Loading from "./loading";
import { Suspense } from "react";
import Body from "./body";
import { HeroPage } from "@/components/modules/HeroPage";

export const metadata: Metadata = {
  title: "Новости АРТ - Всё о туризме в Рязани и Рязанской области",
};

const Page = async () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <HeroPage
          imgUrl="/heroPages/ty-s-mestnym/cit.jpg"
          title="Новости АРТ"
        />
        <Body />
      </Suspense>
    </>
  );
};

export default Page;

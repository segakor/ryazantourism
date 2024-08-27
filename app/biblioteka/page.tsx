import type { Metadata } from "next";
import Loading from "./loading";
import { Suspense } from "react";
import Body from "./body";
import { HeroPage } from "@/components/modules/HeroPage";

export const metadata: Metadata = {
  title: "Библиотека - Всё о туризме в Рязани и Рязанской области",
};

const Page = async () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <HeroPage
          imgUrl="/heroPages/biblioteka/mainNavigation.jpg"
          title="А что знаешь о Рязани ты?"
          desc="1000 и 1 причина отправиться в путешествие в Рязанскую область — и навсегда оставить здесь свое сердце"
        />
        <Body />
      </Suspense>
    </>
  );
};

export default Page;

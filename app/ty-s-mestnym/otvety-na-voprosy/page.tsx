import type { Metadata } from "next";
import Body from "./body";
import Loading from "./loading";
import { Suspense } from "react";
import { data } from "@/constants/pages/ty-s-mestnym/otvety-na-voprosy";

export const metadata: Metadata = {
  title: "Ответы на вопросы - Всё о туризме в Рязани и Рязанской области",
};

const Page = async () => {
  return (
    <Suspense fallback={<Loading />}>
      <Body data={data} />
    </Suspense>
  );
};

export default Page;

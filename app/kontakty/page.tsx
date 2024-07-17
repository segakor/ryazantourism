import type { Metadata } from "next";
import Body from "./body";
import Loading from "./loading";
import { TLongReadBody } from "@/types/types";
import { Suspense } from "react";
import { template } from "@/constants/pages/kontakty/kontakty";

export const metadata: Metadata = {
  title:
    "Контакты - Всё о туризме в Рязани и Рязанской области",
};

const Page = async () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Body data={template as TLongReadBody[]} />
      </Suspense>
    </>
  );
};

export default Page;

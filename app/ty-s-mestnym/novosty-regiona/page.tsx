import type { Metadata } from "next";
import Body from "./body";
import Loading from "./loading";
import { TLongReadBody } from "@/types/types";
import { Suspense } from "react";
import { template } from "@/constants/pages/ty-s-mestnym/cit";

export const metadata: Metadata = {
  title:
    "Визит-центр для туристов - Всё о туризме в Рязани и Рязанской области",
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

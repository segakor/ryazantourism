import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import Body from "./body";
import { promTurizm } from "@/constants/pages/promTurizm/promTurizm";

export const metadata: Metadata = {
  title:
    "Промышленный туризм Рязанской области - Всё о туризме в Рязани и Рязанской области",
};

const Page = async () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Body data={promTurizm as any} />
      </Suspense>
    </>
  );
};

export default Page;

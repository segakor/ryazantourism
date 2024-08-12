import type { Metadata } from "next";
import Loading from "./loading";
import { Suspense } from "react";
import Body from "./body";

export const metadata: Metadata = {
  title:
    "Промышленный туризм Рязанской области - Всё о туризме в Рязани и Рязанской области",
};

const Page = async () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Body />
      </Suspense>
    </>
  );
};

export default Page;

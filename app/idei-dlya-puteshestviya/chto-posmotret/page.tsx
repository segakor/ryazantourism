import Body from "./body";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Что посмотреть? - Всё о туризме в Рязани и Рязанской области",
};

const Page = () => {
  return (
    <div>
      <Body />
    </div>
  );
};

export default Page;

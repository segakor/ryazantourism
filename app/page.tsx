import { Hero } from "@/components/modules/Hero/Hero";
import { MainBannerRoutes } from "@/components/modules/MainBannerRoutes/MainBannerRoutes";
import { MainNavigation } from "@/components/modules/MainNavigation/MainNavigation";
import { News } from "@/components/modules/News/News";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Всё о туризме в Рязани и Рязанской области",
  description: "Собрали для вас только лучшие места, которые помогут вам насладиться Рязанью. Вы можете исследовать Рязань как самостоятельно, так и с помощью наших опытных экскурсоводов!",
};

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  /* console.log(response); */

  return response.json();
}

export default async function Home() {
  const post = await getData();

  return (
    <main>
      {/* {post.map((item) => (
        <div>{item.title}</div>
      ))} */}
      <Hero />
      <div className="home_page">
        <MainNavigation />
        <MainBannerRoutes />
        <News />
      </div>
    </main>
  );
}

import { Hero } from "@/components/modules/Hero/Hero";
import { MainBannerRoutes } from "@/components/modules/MainBannerRoutes/MainBannerRoutes";
import { MainNavigation } from "@/components/modules/MainNavigation/MainNavigation";

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
      <MainNavigation />
      <MainBannerRoutes />
    </main>
  );
}

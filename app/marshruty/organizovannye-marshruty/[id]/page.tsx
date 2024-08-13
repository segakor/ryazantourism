import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import Body from "./body";
import { TOrgEventCard } from "@/types/types";
import { eventCards } from "@/constants/pages/organizovannye-marshruty/eventCards";
import { HeroPage } from "@/components/modules/HeroPage";

type Props = {
  params: { id: string };
};

async function getEventCard(id: string) {
  const data = eventCards.find((item) => item.id === Number(id));
  return data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const data = eventCards.find((item) => item.id === Number(id));

  return {
    title: `${data?.title} - Всё о туризме в Рязани и Рязанской области`,
  };
}

const Page = async ({ params }: Props) => {
  const data = (await getEventCard(params.id)) as TOrgEventCard;

  return (
    <Suspense fallback={<Loading />}>
     <div className="pages">
        <HeroPage
          imgUrl={data?.imgUrl || "/heroPages/ty-s-mestnym/cit.jpg"}
          title={data.title}
          desc=""
        />
        <Body data={data} />
      </div>
    </Suspense>
  );
};

export default Page;

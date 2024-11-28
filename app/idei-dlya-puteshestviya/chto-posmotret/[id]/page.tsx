import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import { HeroPage } from "@/components/modules/HeroPage";
import { TArchCard } from "@/types/types";
import Body from "./body";
import { WrapperGreyPages } from "@/components/wrapper";

type Props = {
  params: { id: string };
};

async function getDetailsChtoPosmotret(id: string) {
  const response = await fetch(
    `https://ryazantourism.ru/api-v2/chtoPosmotret/${id}`,
    {
      next: { revalidate: 3600 },
    }
  );
  return response.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const data = await getDetailsChtoPosmotret(id) as TArchCard;

  return {
    title: `${data?.title} - Всё о туризме в Рязани и Рязанской области`,
  };
}

const Page = async ({ params }: Props) => {
  const data = (await getDetailsChtoPosmotret(params.id)) as TArchCard;

  return (
    <Suspense fallback={<Loading />}>
      <WrapperGreyPages>
        <HeroPage
          imgUrl="/heroPages/idei-dlya-puteshestviya/chto-posmotret.jpg"
          title={data.title}
          desc=""
        />
        <Body data={data.template} sideBarText={data.contacts} />
      </WrapperGreyPages>
    </Suspense>
  );
};

export default Page;

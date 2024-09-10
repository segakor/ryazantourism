import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import { HeroPage } from "@/components/modules/HeroPage";
import { TNasledieCard } from "@/types/types";
import Body from "./body";
import { chtoPosmotret } from "@/constants/pages/idei-dlya-puteshestviya/chto-posmotret";
import { WrapperGreyPages } from "@/components/wrapper";

type Props = {
  params: { id: string };
};

async function getDetailsNasledie(id: string) {
  const data = chtoPosmotret.find((item) => item.id === Number(id));
  return data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const data = await getDetailsNasledie(id);

  return {
    title: `${data?.title} - Всё о туризме в Рязани и Рязанской области`,
  };
}

const Page = async ({ params }: Props) => {
  const data = (await getDetailsNasledie(params.id)) as TNasledieCard;

  return (
    <Suspense fallback={<Loading />}>
      <WrapperGreyPages>
        <HeroPage
          imgUrl="/heroPages/idei-dlya-puteshestviya/chto-posmotret.jpg"
          title={data.title}
          desc=""
        />
        <Body data={data.template} />
      </WrapperGreyPages>
    </Suspense>
  );
};

export default Page;

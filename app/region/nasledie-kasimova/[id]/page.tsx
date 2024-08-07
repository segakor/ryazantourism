import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";
import { HeroPage } from "@/components/modules/HeroPage";
import Body from "./body";
import { TNasledieCard } from "@/types/types";
import { nasledieKasimov } from "@/constants/pages/nasledie-kasimov/nasledie-kasimov";

type Props = {
  params: { id: string };
};

async function getDetailsNasledie(id: string) {
  const data = nasledieKasimov.find((item) => item.id === Number(id));
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
      <div className="pages">
        <HeroPage
          imgUrl={data?.imgUrl || "/heroPages/ty-s-mestnym/cit.jpg"}
          title={data.title}
          desc=""
        />
        <Body data={data.template} />
      </div>
    </Suspense>
  );
};

export default Page;

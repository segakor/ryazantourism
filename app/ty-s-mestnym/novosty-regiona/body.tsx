import { NewsCard } from "@/components/modules/NewsCard/NewsCard";

const Body = ({ data }: { data: any }) => {
  return (
    <section className="grid_layout">
      <NewsCard news={data} type="region" />
    </section>
  );
};

export default Body;

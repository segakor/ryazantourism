"use client";
import { TLongReadBody } from "@/types/types";
import { LongRead } from "@/components/modules/LongRead";

const Body = ({ data }: { data: TLongReadBody[] }) => {
  return <LongRead body={data} />;
};

export default Body;

import { ListPage, Products } from "@/pageComponents/index/parent";
import axios from "axios";
import React from "react";
import type { Metadata } from "next";

const refetch = async (params: { page: string; q: string }) => {
  const { page = "1", q = "" } = params;
  const per_page = 20;

  const { data } = await axios.get<Products>(
    `https://dummyjson.com/products/search`,
    {
      params: {
        skip: (Number(page) - 1) * per_page,
        limit: Number(page) * per_page,
        q,
      },
    }
  );

  const endReached = false;

  return { ...data, endReached };
};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Home: React.FC = async ({ searchParams }: { searchParams?: any }) => {
  const data = await refetch(searchParams);

  return <ListPage {...data} />;
};

export default Home;

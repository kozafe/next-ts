import { ListPage, Products } from "@/pageComponents/index/parent";
import axios from "axios";
import React from "react";

const removeDuplicates = (array: any[]) => {
  const result = array.reduce((acc, current) => {
    const x = acc.find((item: any) => item === current);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return result;
};

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

const Home: React.FC = async ({ searchParams }: { searchParams?: any }) => {
  const data = await refetch(searchParams);

  return <ListPage {...data} />;
};

export default Home;

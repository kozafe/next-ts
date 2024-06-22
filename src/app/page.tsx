import { ListPage, Products } from "@/pageComponents/index/parent";
import axios from "axios";
import React from "react";

const refetch = async () => {
  const { data } = await axios.get<Products>(
    "https://dummyjson.com/products?limit=10"
  );

  return data;
};

const Home: React.FC = async () => {
  const data = await refetch();

  return <ListPage {...data} />;
};

export default Home;

import { DetailsPage } from "@/pageComponents/details/parent";
import { Product } from "@/pageComponents/index/parent";
import axios from "axios";

const refetch = async (id: number) => {
  const { data } = await axios.get<Product>(
    `https://dummyjson.com/products/${id}`
  );

  return data;
};

const Details = async ({ params }: { params: any }) => {
  const data = await refetch(params.id);
  return <DetailsPage {...data} />;
};

export default Details;

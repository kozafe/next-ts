"use client";

import { splitArray } from "@/tools";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  thumbnail: string;
}

export interface Products {
  total: number;
  skip: number;
  limit: number;
  products: Product[];
}

export const ListPage = (res: Products) => {
  const { products } = res;

  const splitted = splitArray<Product>(products, 2);

  return (
    <div style={{ margin: 24 }}>
      <h1>NEXT TS CRUD</h1>
      {splitted.map((array, index) => (
        <div key={index}>
          {array.map((item, index) => {
            const { title } = item;
            console.log("title:", title);

            return <div key={index}>{title}</div>;
          })}
        </div>
      ))}
    </div>
  );
};

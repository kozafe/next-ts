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
        <div key={index} className="flex" style={{ flexDirection: "row" }}>
          {array.map((item, index) => {
            const { title } = item;

            return (
              <div key={index}>
                {title}

                <button className="delay-100 duration-100 transform hover:scale-125 transition ease-linear bg-teal-400 px-6 py-2 m-4 inline">
                  100
                </button>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

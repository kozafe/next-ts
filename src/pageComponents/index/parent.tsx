"use client";

import { splitArray } from "@/tools";
import React from "react";

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

interface ProductsList extends Products {
  split: number;
}

export const ListPage = (res: ProductsList) => {
  const { products, split } = res;

  const splitted = splitArray<Product | null>(products, split);
  const width = `${100 / split}%`;

  return (
    <div className="m-4">
      <h1 className="mb-4">
        This project is built using:{" "}
        <span style={{ fontWeight: "bold" }}>NEXT + TypeScript</span>
      </h1>
      {splitted.map((array, index) => (
        <div key={index} className="flex flex-row justify-between mb-4">
          {array.map((item, index) => {
            if (!item) return <div style={{ width }} key={index} />;
            const { title, thumbnail, rating, price } = item || {};

            return (
              <div
                key={index}
                style={{
                  width,
                  borderRadius: 12,
                  padding: 12,
                  borderWidth: 1,
                }}
                className="flex flex-col cursor-pointer border-teal-200 delay-100 duration-100 transform hover:scale-105 transition ease-linear px-6 py-2 m-4 inline"
              >
                <img src={thumbnail} className="h-40 object-contain" />
                <p style={{ fontWeight: "bold" }}>USD {price}</p>
                {title}
                <div>⭐ {rating}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

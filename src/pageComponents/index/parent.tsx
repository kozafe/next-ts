"use client";

import { Textfield } from "@/components/inputs";
import Link from "next/link";
import { Pagination } from "./pagination";
import { CSSProperties } from "react";

export const clickableProps = (style?: CSSProperties, className = "") => ({
  style: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    ...style,
  },
  className: `flex flex-col cursor-pointer border-teal-200 delay-100 duration-100 transform hover:scale-105 transition ease-linear px-6 py-2 inline mb-6 ${className}`,
});

export interface Product {
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
  images: string[];
}

export interface Products {
  total: number;
  skip: number;
  limit: number;
  products: Product[];
}

export const ListPage = (res: { products: Product[]; endReached: boolean }) => {
  const { products, endReached } = res;

  const isEmpty = !products.length;

  return (
    <div className="m-4">
      <h1 className="mb-4">
        This project is built using:{" "}
        <span style={{ fontWeight: "bold" }}>NEXT + TypeScript</span>
      </h1>
      <div className="flex flex-row justify-center my-4">
        <Textfield />
      </div>
      {isEmpty ? (
        <div
          className="flex flex-row justify-center "
          style={{ height: "60vh", alignItems: "center" }}
        >
          <p>Product not found</p>
        </div>
      ) : (
        <>
          <div className="product-grid mb-4 flex flex-row justify-between">
            {products.map((item, index) => {
              const { title, thumbnail, rating, price, id } = item;

              return (
                <Link href={`/${id}`} key={index} {...clickableProps()}>
                  <img
                    src={thumbnail}
                    className="h-40 object-contain"
                    style={{ maxHeight: "100%" }}
                  />
                  <p style={{ fontWeight: "bold" }}>USD {price}</p>
                  {title}
                  <div>⭐ {rating}</div>
                </Link>
              );
            })}
          </div>
          <Pagination isLastDisabled={endReached} />
        </>
      )}
    </div>
  );
};

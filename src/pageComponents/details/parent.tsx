"use client";

import { useState } from "react";
import { Product, clickableProps } from "../index/parent";
import Image, { ImageLoaderProps } from "next/image";
import { DetailsCarousel } from "./images";

export const DetailsPage = (props: Product) => {
  const { images, title, price, description } = props;

  return (
    <div className="m-4 flex flex-row">
      <DetailsCarousel images={images} />
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

"use client";

import { useState } from "react";
import { Product } from "../index/parent";

export const DetailsPage = (props: Product) => {
  const { images } = props;

  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="m-4">
      <img src={images[imageIndex]} style={{ width: 400 }} />
      <div style={{ gap: 8 }} className="flex flex-row">
        {images?.map((item, index) => (
          <img
            key={index}
            src={item}
            style={{ width: 100, borderWidth: 1, borderRadius: 4 }}
            onClick={() => setImageIndex(index)}
            className="cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

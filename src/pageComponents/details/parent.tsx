"use client";

import { useState } from "react";
import { Product, clickableProps } from "../index/parent";
import Image from "next/image";

export const DetailsPage = (props: Product) => {
  const { images } = props;

  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="m-4">
      <div style={{ width: 400 }}>
        <div style={{ height: 400 }} className="flex justify-center">
          <img
            src={images[imageIndex]}
            style={{ maxWidth: 400, maxHeight: 400 }}
          />
        </div>
        <div style={{ gap: 8, overflowX: "auto" }} className="flex flex-row">
          {images?.map((item, index) => (
            <Image
              alt="failed to load image"
              key={index}
              src={item}
              width={124}
              height={124}
              {...clickableProps({
                maxWidth: 124,
                maxHeight: 124,
                objectFit: "contain",
              })}
              onClick={() => setImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

"use client";

import Image from "next/image";
import { useState } from "react";
import { clickableProps } from "../index/parent";

export const DetailsCarousel = ({ images }: { images: string[] }) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
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
  );
};

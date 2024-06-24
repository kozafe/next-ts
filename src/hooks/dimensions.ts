"use client";

import { useEffect, useState } from "react";

export const useDimensions = () => {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () =>
      setDimension({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const isTabOrPhone = dimension.width <= 768;

  return { ...dimension, isTabOrPhone };
};

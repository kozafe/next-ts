"use client";

export const splitArray = <T>(array: (T | null)[], chunkSize: number) => {
  let arrayModified = array;
  let result = [];

  const missingArrSum = array.length % chunkSize;

  for (let i = 0; i < missingArrSum; i++) {
    arrayModified.push(null);
  }

  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
};

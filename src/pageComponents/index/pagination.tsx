"use client";

import { CustomLink } from "@/components/link";
import { useSearchParams } from "next/navigation";

export const Pagination = ({
  isLastDisabled,
}: {
  isLastDisabled?: boolean;
}) => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const q = searchParams.get("q");

  const disabledFirst = page == 1;

  const urlFormatter = (page: number) => {
    const pageString = `?page=${page}`;

    if (!q) return pageString;

    return `${pageString}&q=${q}`;
  };

  return (
    <div className="flex flex-row justify-center">
      <CustomLink
        href={urlFormatter(page - 1)}
        className="mr-2"
        disabled={disabledFirst}
      >
        Previous
      </CustomLink>
      <CustomLink href={urlFormatter(page + 1)} disabled={isLastDisabled}>
        Next
      </CustomLink>
    </div>
  );
};

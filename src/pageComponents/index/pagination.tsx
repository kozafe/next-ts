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

  const disabledFirst = page == 1;

  return (
    <div className="flex flex-row justify-center">
      <CustomLink
        href={`?page=${page - 1}`}
        className="mr-2"
        disabled={disabledFirst}
      >
        Previous
      </CustomLink>
      <CustomLink href={`?page=${page + 1}`} disabled={isLastDisabled}>
        Next
      </CustomLink>
    </div>
  );
};

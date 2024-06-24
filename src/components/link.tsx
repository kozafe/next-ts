"use client";

import Link from "next/link";
import { ReactNode } from "react";

export const CustomLink = ({
  href,
  disabled,
  children,
  className,
}: {
  href: string;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}) => {
  if (disabled)
    return (
      <div
        className={`${className} p-2 cursor-not-allowed`}
        style={{ borderRadius: 4 }}
      >
        {children}
      </div>
    );
  return (
    <Link
      href={href}
      className={`${className} bg-teal-400 p-2`}
      style={{ borderRadius: 4 }}
    >
      {children}
    </Link>
  );
};

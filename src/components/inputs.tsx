"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const Textfield = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  const [value, setValue] = useState(q);

  const { push } = useRouter();

  return (
    <input
      placeholder="Search me!"
      style={{ borderWidth: 1 }}
      className="px-4 py-2"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        const isEnter = e.code == "Enter";
        if (!isEnter) return;
        push(`?q=${value}`);
      }}
    />
  );
};

"use client";

import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tes, setTes] = useState(false);
  console.log("tes:", tes);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

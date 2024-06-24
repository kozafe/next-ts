import { useDebounce } from "@/hooks/debounce";
import { useEffect, useState } from "react";

export const Textfield = () => {
  const [value, setValue] = useState("");

  const debounced = useDebounce<string>(value, 400);

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) return setIsFirstRender(false);
    console.log("debounced:", debounced);
  }, [debounced]);

  return (
    <input
      placeholder="Search me!"
      style={{ borderWidth: 1 }}
      className="px-4 py-2"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

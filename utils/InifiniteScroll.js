import { useEffect, useState } from "react";

export default function InifiniteScroll() {
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight;
      setBottom(isBottom);
    }
    window.addEventListener("scroll", handleScroll);
  }, []);

  return bottom;
}

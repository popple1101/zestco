import { useEffect, useState } from "react";

export function useCMS(key, initial) {
  const read = () => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? initial;
    } catch {
      return initial;
    }
  };
  const [data, setData] = useState(read);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === key) setData(read());
    };
    const onUpdate = (e) => {
      if (!e.detail || e.detail.key === key) setData(read());
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener("cms:update", onUpdate);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("cms:update", onUpdate);
    };
  }, [key]);

  return data;
}

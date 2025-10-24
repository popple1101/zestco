import { useEffect, useState } from "react";

export default function useLocalState(key, initial) {
  const [state, setState] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
    // 동일 탭 반영 위해 커스텀 이벤트 발행
    window.dispatchEvent(new CustomEvent("cms:update", { detail: { key } }));
  }, [key, state]);

  return [state, setState];
}

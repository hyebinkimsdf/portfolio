// ScrollToTop.tsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지가 변경될 때마다 스크롤을 맨 위로 이동
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0); // 즉시 실행이 아닌 비동기적으로 처리하여 스크롤 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, [pathname]); // pathname이 변경될 때마다 실행

  return null;
}

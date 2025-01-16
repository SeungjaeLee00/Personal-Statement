import { useEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";

import "../style/components/TopBotton.css";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop >= 40) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너를 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트되거나 업데이트되기 직전에 호출되는 함수를 반환
    // 이 함수에서는 스크롤 이벤트 리스너를 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="top-btn" onClick={moveToTop} isVisible={isVisible}>
      <SlArrowUp />
    </div>
  );
};

export default TopButton;

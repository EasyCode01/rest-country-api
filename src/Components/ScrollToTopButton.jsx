import React from "react";

const ScrollToTopButton = ({ isScrollTopVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`scroll__top ${isScrollTopVisible ? "" : "hide--scroll--top"}`}
    >
      <iconify-icon icon="fa6-solid:chevron-up"></iconify-icon>
    </button>
  );
};

export default ScrollToTopButton;

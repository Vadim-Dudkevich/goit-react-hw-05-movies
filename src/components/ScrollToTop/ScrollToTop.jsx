import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import css from './ScrollToTop.module.css';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={css.top_to_btn}>
      {' '}
      {showTopBtn && (
        <FaAngleUp className={css.icon_position} onClick={goToTop} />
      )}{' '}
    </div>
  );
};
export default ScrollToTop;

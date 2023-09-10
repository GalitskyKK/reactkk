import React, { useEffect, useState } from 'react';

function ScrollToTopButton() {
   const [isVisible, setIsVisible] = useState(false);

   const handleScroll = () => {
      if (window.pageYOffset > 400) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
   };

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <div
         className={`button-up ${isVisible ? '' : 'button-up_hide'}`}
         onClick={scrollToTop}
      >
      </div>
   );
}

export default ScrollToTopButton;

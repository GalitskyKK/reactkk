import React, { useState } from 'react';

function Navigation({ setPopupVisible }) {
   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

   const handlePopupToggle = () => {
      setPopupVisible(prev => !prev);
   };

   const handleMobileMenuToggle = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
      if (isMobileMenuOpen) {
         // Закрываем меню - устанавливаем max-height в 0
         document.querySelector('.menu-items').style.maxHeight = '0';
      } else {
         // Открываем меню - устанавливаем максимальную высоту
         document.querySelector('.menu-items').style.maxHeight = '300px'; // Здесь вы можете установить максимальную высоту по вашему желанию
      }
   };

   const closeMobileMenu = () => {
      setMobileMenuOpen(false);
   };
   

   return (
      <nav>
         <div className="nav-logo">
            <a href="#main">NMKK</a>
         </div>
         <div className="nav-row">
            <button className="signin" id="show-login" onClick={handlePopupToggle}>
               Sign In
            </button>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#links">Links</a>
            <a href="#contact">Contact</a>
         </div>
         <div className="mobile-menu">
            <div className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} id="menuToggle" onClick={handleMobileMenuToggle}>
               <span></span>
               <span></span>
               <span></span>
            </div>
            <ul className={`menu-items ${isMobileMenuOpen ? 'active' : ''}`} id="menu">
               <li>
                  <button id="show-login-menu" className="login" onClick={handlePopupToggle}>
                     Sign In
                  </button>
               </li>
               <li>
                  <a href="#about" onClick={closeMobileMenu}>
                     About
                  </a>
               </li>
               <li>
                  <a href="#projects" onClick={closeMobileMenu}>
                     Projects
                  </a>
               </li>
               <li>
                  <a href="#links" onClick={closeMobileMenu}>
                     Links
                  </a>
               </li>
               <li>
                  <a href="#contact" onClick={closeMobileMenu}>
                     Contact
                  </a>
               </li>
            </ul>
         </div>
         <div className="button-up button-up_hide"></div>
      </nav>
   );
}

export default Navigation;

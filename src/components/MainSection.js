import React from 'react';

const MainSection = () => {
   return (
      <section className="titleinfo" id="main">
         <div className="container">
            <div className="content">
               <div className="maininfo">
                  <div className="maininfo-text">
                     <div className="maininfo-text__title">Front-End Developer</div>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt id incidunt iusto magnam ullam quas?</p>
                     <span>
                        <a target="_blank" rel="noreferrer" href="https://vk.com/needmorethanyou">VK</a>
                        <a target="_blank" rel="noreferrer" href="https://t.me/NGalitsky">Telegram</a>
                     </span>
                  </div>
                  <div className="maininfo-tag"></div>
               </div>
               <div className="bottominfo">
                  <p>Tech Stack</p>
                  <div className="bottominfo-logo">
                     <ul>
                        <li><img src="img/logos/html5.svg" alt="" /></li>
                        <li><img src="img/logos/css.svg" alt="" /></li>
                        <li><img src="img/logos/js.svg" alt="" /></li>
                        <li><img src="img/logos/sass.svg" alt="" /></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default MainSection;

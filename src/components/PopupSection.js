import React from 'react';

function Popup({ popupVisible, setPopupVisible }) { // Принимаем состояние и функцию для управления видимостью попапа
   const closePopup = () => {
      setPopupVisible(false); // Закрыть попап
   };

   return (
      <div className={`popup ${popupVisible ? 'active' : ''}`}>
         <div id="closebutton" className="close-btn" onClick={closePopup}>
            &times;
         </div>
         <div className="form">
            <form action="#" method="post" id="form" className="form-body">
               <h2>Log In</h2>
               <div className="form-element">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" placeholder="Enter Email" />
               </div>
               <div className="form-element">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="Enter Password" />
               </div>
               <div className="form-element">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
               </div>
               <div className="form-element">
                  <button>Sign In</button>
               </div>
               <div className="form-element">
                  <a href="/reset-password">Forgot password ?</a>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Popup;

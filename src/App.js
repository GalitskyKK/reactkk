import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PopupSection from './components/PopupSection';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  const [popupVisible, setPopupVisible] = useState(false); // Добавьте это

  return (
    <div className="wrapper">
      <Navbar setPopupVisible={setPopupVisible} /> {/* Передаем функцию для управления видимостью попапа */}
      <PopupSection popupVisible={popupVisible} setPopupVisible={setPopupVisible} /> {/* Передаем состояние и функцию для управления видимостью попапа */}
      <MainSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;

import React, { useState } from "react";

import Header from "./Component/Header";

import HeroSection from "./Component/HeroSection";

import ThemeContext from "./Context/ThemeContext";


const App=()=>{
  const [themeHook]=useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
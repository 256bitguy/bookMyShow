import React from "react";
import "./index.css";
import { Header } from "./Home/Header";
import { Options } from "./Home/Options";
import { Baner } from "./Home/Baner";
import { Movies } from "./Home/Movies";
function App() {
  return (
    <>
      <Header/>

      <Options/>
      <Baner/>
      <Movies/>
    
     
    </>
  );
}

export default App;

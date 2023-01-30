import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import Mission from "./Components/Mission";
import Team from './Components/Team';
import TeamsMem from "./Components/TeamsMem";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import Signin from './Components/Signin';
import Footer from "./Components/Footer.jsx";

function App() {
  return (

    <div className="App">
      <Routes>
      <Route path="/signin" element={<Signin />} />
      </Routes>
      <Header />
      <Hero />
      <Main />
      <Experience />
      <Mission />
      <Team />
      <TeamsMem />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;

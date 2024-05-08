import React from "react";
import Body from "./pages/body";
import { Routes ,Route } from "react-router-dom";
import Registration from "./pages/registration";
import { NavBar } from "./components/navbar";
import { Footer } from "./components/footer";
import Committees from "./pages/committee";
import { AuthorGuidelines } from "./pages/author-guide";
import DeclareSoon from "./pages/declareSoon";

export default function HeroComponent() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/committees" element={<Committees/>} />
        <Route path="/author-guide" element={<AuthorGuidelines/>}/>
        <Route path="/contact" element={<DeclareSoon/>}/>
        <Route path="/agenda" element ={<DeclareSoon/>} />
        <Route path="/participation-policy" element ={<DeclareSoon/>} />
      </Routes>
      <Footer/>
    </>
  );
}

import React from "react";
import Body from "./pages/body";
import { Routes ,Route } from "react-router-dom";
import Registration from "./pages/registration";
import { NavBar } from "./components/navbar";
import { Footer } from "./components/footer";
import Committees from "./pages/committee";
import { AuthorGuidelines } from "./pages/author-guide";
import { Accommodation } from "./pages/accommodation";
import DeclareSoon from "./pages/declareSoon";
import Contact from "./pages/contact";
import Cfp from "./pages/cfp";
import Dates from "./pages/dates";
import PresentationGuide from "./pages/presentationGuide";
import PresentationSchedule from "./pages/presentationSchedule";

export default function HeroComponent() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/committees" element={<Committees/>} />
        <Route path="/cfp" element={<Cfp/>} />
        <Route path="/dates" element={<Dates/>} />
        <Route path="/presentation-guide" element={<PresentationGuide/>} />
        <Route path="/presentationSchedule" element={<PresentationSchedule/>} />
        <Route path="/author-guide" element={<AuthorGuidelines/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/accommodation" element ={<Accommodation/>} />
        <Route path="/participation-policy" element ={<DeclareSoon/>} />
      </Routes>
      <Footer/>
    </>
  );
}

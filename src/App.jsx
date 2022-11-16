import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Location from "./pages/Location";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/location" element={<Location />}></Route>
      </Routes>
    </>
  );
}

export default App;

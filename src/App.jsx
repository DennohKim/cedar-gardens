import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Location from "./pages/Location";
import Photography from "./pages/services/Photography";
import KidsPlayground from "./pages/services/KidsPlayground";
import Swimming from "./pages/services/Swimming";
import Parties from "./pages/services/Parties";
import Meetings from "./pages/services/Meetings";
import BarAndRestaurant from "./pages/services/BarAndRestaurant";
import Accomodation from "./pages/services/Accomodation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/accomodation" element={<Accomodation />} />
        <Route
          path="/services/barandrestaurant"
          element={<BarAndRestaurant />}
        />
        <Route path="/services/meetings" element={<Meetings />} />
        <Route path="/services/parties" element={<Parties />} />
        <Route path="/services/swimming" element={<Swimming />} />
        <Route path="/services/kidsplayground" element={<KidsPlayground />} />
        <Route path="/services/photography" element={<Photography />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;

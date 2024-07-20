import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Routes/Home/Home";
import PujaBooking from "./Routes/PujaBooking/PujaBooking";
import PujaOfferings from "./Routes/PujaOfferings/PujaOfferings";
import PujaDetails from "./Routes/PujaDetails/PujaDetails";
import PackagePage from "./Routes/PackagePage/PackagePage";
import PujaApplication from "./Routes/PujaApplication/PujaApplication";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/puja-bookings" element={<PujaBooking/>} />
        <Route path="/puja-offerings" element={<PujaOfferings/>} />
        <Route path="/puja-details" element={<PujaDetails/>} />
        <Route path="/package-details" element={<PackagePage/>} />
        <Route path="/puja-application" element={<PujaApplication />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
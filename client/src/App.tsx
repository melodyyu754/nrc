import React from "react";
import backgroundImage from "./assets/nitish-meena-RbbdzZBKRDY-unsplash.jpg";
import Button from "./components/Button";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import BHNCalculator from "./pages/calculators/BHN";
import THNCalculator from "./pages/calculators/THN";
import BIMNCalculator from "./pages/calculators/BIMN";
import TIMNCalculator from "./pages/calculators/TIMN";

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BHN" element={<BHNCalculator />} />
          <Route path="/THN" element={<THNCalculator />} />
          <Route path="/BIMN" element={<BIMNCalculator />} />
          <Route path="/TIMN" element={<TIMNCalculator />} />

          {/* If any route mismatches the upper route endpoints, then redirect triggers 
      and redirects the app to the home component with to="/" */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
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
import BHNCalculator from "./pages/BHN";
import THNCalculator from "./pages/THN";
import BIMNCalculator from "./pages/BIMN";
import TIMNCalculator from "./pages/TIMN";

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

// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";

// function App() {
//     const [alertVisible, setAlertVisiblility] = useState(false);
//   return (
//     <div>
//       {alertVisible && <Alert onClose= {() => setAlertVisiblility(false)}>My alert</Alert>}
//       <Button onClick={() => {setAlertVisiblility(true)}}>Hello</Button>
//     </div>
//   );
// }

// export default App;

// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }

//   return <div><ListGroup items = {items} heading = "Cities" onSelectItem={handl}/></div>
// }

// export default App;

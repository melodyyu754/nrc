import React from 'react';
import backgroundImage from '../assets/nitish-meena-RbbdzZBKRDY-unsplash.jpg';
import Button from '../components/Button';
import BackgroundImage from '../components/BackgroundContainer';

function Home() {
    return (
        <BackgroundImage>
            <h1>NUCLEATION RATE CALCULATORS</h1>
            <p>BINARY HOMOGENEOUS NUCLEATION (BHN) OF H₂SO₄-H₂O</p>
            <p>TERNARY HOMOGENEOUS NUCLEATION (THN) OF H₂SO₄-H₂O-NH₃</p>
            <p>BINARY ION-MEDIATED NUCLEATION (BIMN) OF H₂SO₄-H₂O</p>
            <p>TERNARY ION-MEDIATED NUCLEATION (TIMN) OF H₂SO₄-H₂O-NH₃</p>
            <div className='flex px-1'>
                <Button to={'/BHN'}>BHN</Button>
                <Button to={'/THN'}>THN</Button>
                <Button to={'/BIMN'}>BIMN</Button>
                <Button to={'/TIMN'}>TIMN</Button>
            </div>
        </BackgroundImage>
    );
}

export default Home;





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

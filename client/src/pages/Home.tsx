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
            <div style={{ display: "flex" }}>
                <Button to={'/BHN'}>BHN</Button>
                <Button to={'/THN'}>THN</Button>
                <Button to={'/BIMN'}>BIMN</Button>
                <Button to={'/TIMN'}>TIMN</Button>
            </div>
        </BackgroundImage>

    );
}

export default Home;
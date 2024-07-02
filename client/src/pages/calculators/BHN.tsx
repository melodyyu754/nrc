import React, { useState, useEffect } from 'react';
import { google } from 'googleapis'; 
import GenericCalculator from '../../components/GenericCalculator';
import { createCalculateNRC } from '../../components/CalculateNRC';

const BHNCalculator = () => {
    const bhnTitle = "BINARY HOMOGENEOUS NUCLEATION (BHN) OF H₂SO₄-H₂O";
    const bhnOutput = "BHN Nucleation Rate (cm⁻³s⁻¹)";

    const bhnFields = { h2so4: '', temp: '', rh: '', sfcArea: '' }
    const bhnFieldLabels = {
        h2so4: 'H₂SO₄ (in cm⁻³ range 5E5 - 5E9)',
        temp: 'Temperature (range 190-304 K)',
        rh: 'Relative Humidity (range 0.5-99.5 %)',
        sfcArea: 'Surface Area (µm²cm⁻³ range 1-1000)',
    };
    const bhnValidRanges = {
        h2so4: { min: 5e5, max: 5e9 },
        temp: { min: 190, max: 304 },
        rh: { min: 0.5, max: 99.5 },
        sfcArea: { min: 1, max: 1000 },
    }

    // const bhnEndpoint = 'http://apm.asrc.albany.edu:3000/nrcapi/bhn'
    const bhnEndpoint = 'https://api.asrc.albany.edu:3005/nrcapi/bhn'
    const AWSEndpoint = 'https://aasvtb8dgk.execute-api.us-east-2.amazonaws.com/prod/nrc-calculator'
    const calcName = 'BHN'

    const calculateBHN = createCalculateNRC({ calculatorApiEndpoint: bhnEndpoint, loggingApiEndpoint: AWSEndpoint, calculatorName: calcName});

    return (
        <GenericCalculator
            title={bhnTitle}
            outputLabel={bhnOutput}
            inputFields={bhnFields}
            fieldToLabel={bhnFieldLabels}
            calculationFunction={calculateBHN}
            validationRanges={bhnValidRanges}
        />
    );
};

export default BHNCalculator;
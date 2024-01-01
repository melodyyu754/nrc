import GenericCalculator from '../components/GenericCalculator';
import { createCalculateNRC } from '../components/CalculateNRC';


const THNCalculator= () => {
    const thnTitle = "TERNARY HOMOGENEOUS NUCLEATION (THN) OF H₂SO₄-H₂O-NH₃";
    const thnOutput = "THN Nucleation Rate (cm⁻³s⁻¹)";

    const thnFields = { h2so4: '', temp: '', rh: '', sfcArea: '', nh3: '' }
    const thnFieldLabels = {
        h2so4: 'H₂SO₄ (in cm⁻³ range 5E5 - 5E9)',
        temp: 'Temperature (range 190-304 K)',
        rh: 'Relative Humidity (range 0.5-99.5 %)',
        sfcArea: 'Surface Area (µm²cm⁻³ range 1-1000)',
        nh3: 'NH₃ (cm⁻³ range 1E5-1E12)',
    }
    const thnValidRanges = {
        h2so4: { min: 5e5, max: 5e9 },
        temp: { min: 190, max: 304 },
        rh: { min: 0.5, max: 99.5 },
        sfcArea: { min: 1, max: 1000 },
        nh3: { min: 1E5, max: 1E12}
    }

    const thnEndpoint = 'http://apm.asrc.albany.edu:3000/nrcapi/thn'
    const calculateTHN = createCalculateNRC({ endpoint: thnEndpoint });

    return (
        <GenericCalculator
            title={thnTitle}
            outputLabel={thnOutput}
            inputFields={thnFields}
            fieldToLabel={thnFieldLabels}
            calculationFunction={calculateTHN}
            validationRanges={thnValidRanges}
        />
    );
};

export default THNCalculator;
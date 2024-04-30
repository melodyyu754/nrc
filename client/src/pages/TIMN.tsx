import GenericCalculator from '../components/GenericCalculator';
import { createCalculateNRC } from '../components/CalculateNRC';


const TIMNCalculator= () => {
    const timnTitle = "TERNARY ION MEDIATED NUCLEATION (TIMN) OF H₂SO₄-H₂O-NH₃";
    const timnOutput = "TIMN Nucleation Rate (cm⁻³s⁻¹)";

    const timnFields = { h2so4: '', temp: '', rh: '', ionRate: '', sfcArea: '', nh3: '' }
    const timnFieldLables = {
        h2so4: 'H₂SO₄ (in cm⁻³ range 5E5 - 5E9)',
        temp: 'Temperature (range 190-304 K)',
        rh: 'Relative Humidity (range 0.5-99.5 %)',
        ionRate: 'Ionization Rate (ion pairs cm⁻³s⁻¹ range 2-100)',
        sfcArea: 'Surface Area (µm²cm⁻³ range 1-1000)',
        nh3: 'NH₃ (cm⁻³ range 1E5-1E12)'
    }
    const timnValidRanges = {
        h2so4: { min: 5e5, max: 5e9 },
        temp: { min: 190, max: 304 },
        rh: { min: 0.5, max: 99.5 },
        ionRate: { min: 2, max: 100},
        sfcArea: { min: 1, max: 1000 },
        nh3: { min: 1E5, max: 1E12}
    }

    const timnEndpoint = 'http://apm.asrc.albany.edu:3000/nrcapi/timn'
    const calculateTIMN = createCalculateNRC({ endpoint: timnEndpoint });

    return (
        <GenericCalculator
            title={timnTitle}
            outputLabel={timnOutput}
            inputFields={timnFields}
            fieldToLabel={timnFieldLables}
            calculationFunction={calculateTIMN}
            validationRanges={timnValidRanges}
        />
    );
};

export default TIMNCalculator;
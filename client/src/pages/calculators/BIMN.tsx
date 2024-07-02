import GenericCalculator from '../../components/GenericCalculator';
import { createCalculateNRC } from '../../components/CalculateNRC';


const BIMNCalculator = () => {
    const bimnTitle = "BINARY ION MEDIATED NUCLEATION (BIMN) OF H₂SO₄-H₂O";
    const bimnOutput = "BIMN Nucleation Rate (cm⁻³s⁻¹)";

    const bimnFields = { h2so4: '', temp: '', rh: '', ionRate: '', sfcArea: '' }
    const bimnFieldLabels = {
        h2so4: 'H₂SO₄ (in cm⁻³ range 5E5 - 5E9)',
        temp: 'Temperature (range 190-304 K)',
        rh: 'Relative Humidity (range 0.5-99.5 %)',
        ionRate: 'Ionization Rate (ion pairs cm⁻³s⁻¹ range 2-100)',
        sfcArea: 'Surface Area (µm²cm⁻³ range 1-1000)',
    }
    const bimnValidRanges = {
        h2so4: { min: 5e5, max: 5e9 },
        temp: { min: 190, max: 304 },
        rh: { min: 0.5, max: 99.5 },
        ionRate: { min: 2, max: 100 },
        sfcArea: { min: 1, max: 1000 }
    }

    // const bimnEndpoint = 'http://apm.asrc.albany.edu:3000/nrcapi/bimn'
    const bimnEndpoint = 'https://api.asrc.albany.edu:3005/nrcapi/bimn'
    const AWSEndpoint = 'https://aasvtb8dgk.execute-api.us-east-2.amazonaws.com/prod/nrc-calculator'
    const calcName = 'BIMN'

    const calculateBIMN = createCalculateNRC({ calculatorApiEndpoint: bimnEndpoint, loggingApiEndpoint: AWSEndpoint, calculatorName: calcName});

    return (
        <GenericCalculator
            title={bimnTitle}
            outputLabel={bimnOutput}
            inputFields={bimnFields}
            fieldToLabel={bimnFieldLabels}
            calculationFunction={calculateBIMN}
            validationRanges={bimnValidRanges}
        />
    );
};

export default BIMNCalculator;
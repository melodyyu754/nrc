import GenericCalculator from '../components/GenericCalculator';
import { createCalculateNRC } from '../components/CalculateNRC';

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

    const bhnEndpoint = 'http://apm.asrc.albany.edu:3000/nrcapi/bhn'
    const calculateBHN = createCalculateNRC({ endpoint: bhnEndpoint });

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







// const BHNCalculator = () => {
//     const bhnTitle = "BINARY HOMOGENEOUS NUCLEATION (BHN) OF H₂SO₄-H₂O";
//     const bhnOutput = "BHN Nucleation Rate (cm⁻³s⁻¹)";

//     const bhnFields = { field1: '', field2: '', field3: '', field4: '' }
//     const bhnFieldLabels = {
//         field1: 'H₂SO₄ (in cm⁻³ range 5E5 - 5E9)',
//         field2: 'Temperature (range 190-304 K)',
//         field3: 'Relative Humidity (range 0.5-99.5 %)',
//         field4: 'Surface Area (µm²cm⁻³ range 1-1000)',
//     };
//     const bhnValidRanges = {
//         field1: { min: 5e5, max: 5e9 },
//         field2: { min: 190, max: 304 },
//         field3: { min: 0.5, max: 99.5 },
//         field4: { min: 1, max: 1000 },
//     }

//     const bhnEndpoint = 'http://127.0.0.1:5001/calculate_bhn'
//     const calculateBHN = createCalculateNRC({ endpoint: bhnEndpoint });

//     return (
//         <GenericCalculator
//             title={bhnTitle}
//             outputLabel={bhnOutput}
//             inputFields={bhnFields}
//             fieldToLabel={bhnFieldLabels}
//             calculationFunction={calculateBHN}
//             validationRanges={bhnValidRanges}
//         />
//     );
// };

// export default BHNCalculator;
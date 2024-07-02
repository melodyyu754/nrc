import React, { useState, FC, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import OutputField from '../components/OutputField';
import BackgroundContainer from '../components/BackgroundContainer';
import { InputValues } from './InputValues';


interface ValidationRanges {
    [field: string]: { min: number; max: number };
}

const LoadingSpinner: FC = () => (
    <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
);

// Define props for the GenericCalculator component
interface GenericCalculatorProps<InputValues> {
    title: string;
    outputLabel: string;
    inputFields: Record<keyof InputValues, string>;
    fieldToLabel: Record<keyof InputValues, string>;
    calculationFunction: (values: InputValues) => Promise<number | null>;
    validationRanges: ValidationRanges
}



const isInRange = (value: number, min: number, max: number): boolean => {
    return value >= min && value <= max;
};

const GenericCalculator: FC<GenericCalculatorProps<InputValues>> = ({
    title,
    outputLabel,
    inputFields,
    fieldToLabel,
    calculationFunction,
    validationRanges
}) => {
    // State to manage input values
    const [inputValues, setInputValues] = useState<InputValues>(
        Object.fromEntries(Object.keys(inputFields).map((key) => [key, '']))
    );

    // Handler for input field changes
    const handleInputChange = (field: keyof InputValues, value: string) => {
        setInputValues({
            ...inputValues,
            [field]: value,
        });
    };

    // State to manage loading status
    const [loading, setLoading] = useState<boolean>(false);

    // State to store calculation result
    const [result, setResult] = useState<number | null>(null);

    // Handler for form submission (calculation)
    const handleCalculate = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevents the default form submission

        // Set loading to true when starting the calculation
        setLoading(true);

        // log the input values
        console.log('Input values:', inputValues);

        // Validate input values
        const validationErrors: string[] = [];
        Object.entries(inputValues).forEach(([field, value]) => {
            const numericValue = parseFloat(value);
            const range = validationRanges[field];
            if (range && !isInRange(numericValue, range.min, range.max)) {
                validationErrors.push(`${fieldToLabel[field]} is out of range.`);
            }
        });

        // If there are validation errors, show alerts and stop further processing
        if (validationErrors.length > 0) {
            validationErrors.forEach((error) => alert(error));
            setLoading(false);
            return;
        }

        // Perform the calculation if validation passes
        try {
            const response = await calculationFunction(inputValues);
            console.log('Response:', response);

            if (response !== null) {
                setResult(response);
            } else {
                console.error('Failed to fetch result from server');
            }
        } catch (error) {
            console.error('Error during fetch:', error);

        } finally {
            // Set loading to false when the calculation is complete (success or failure)
            setLoading(false);
        }
    };

    return (
        <BackgroundContainer>
            <div>
                <h3>{title}</h3>

                {/* Form */}
                <form onSubmit={handleCalculate}>
                    {/* Input Fields */}
                    {Object.entries(inputFields).map(([field, defaultValue]) => (
                        <InputField
                            key={field}
                            label={fieldToLabel[field]}
                            value={inputValues[field]}
                            onChange={(newValue) => handleInputChange(field, newValue)}
                        />
                    ))}

                    {/* Calculate Button */}
                    <button type="submit" disabled={loading}>
                        {loading ? <LoadingSpinner /> : 'Calculate'}
                    </button>
                </form>

                {/* Output Field */}
                {result !== null && <OutputField label={outputLabel} value={result} />}

                <div>
                    {/* Link to Home */}
                    <Link to="/">
                        <button style={{ marginRight: '10px' }}>Homer</button>
                    </Link>
                </div>
            </div>
        </BackgroundContainer>
    );
};

export default GenericCalculator;

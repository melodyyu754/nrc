// InputField.tsx
import React from 'react';

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (newValue: string) => void;
}

const InputField= ({ label, value, onChange }: InputFieldProps) => {
    return (
        <div>
            <label>{label}</label>
            <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
};

export default InputField;

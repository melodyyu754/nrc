// InputField.tsx
import React from 'react';

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (newValue: string) => void;
}

const InputField = ({ label, value, onChange }: InputFieldProps) => {
    return (
        <div className='py-1'>
            <input className='rounded-3xl' type="text" value={value} onChange={(e) => onChange(e.target.value)} />
            <label className='px-2'>{label}</label>
        </div>
    );
};

export default InputField;
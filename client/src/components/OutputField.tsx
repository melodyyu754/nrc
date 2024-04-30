import React from 'react';

interface OutputFieldProps {
  label: string;
  value: string | number | null;
}

const OutputField: React.FC<OutputFieldProps> = ({ label, value }) => {
  return (
    <div>
      <label>{label}</label>
      <div className='bg-gray-400 w-5 h-3 p-1'> {/* Optional padding */}
        {value}
      </div>
    </div>
  );
};

export default OutputField;
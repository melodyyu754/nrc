import React from 'react';

interface OutputFieldProps {
  label: string;
  value: string | number | null;
}

const OutputField: React.FC<OutputFieldProps> = ({ label, value }) => {
  return (
    <div>
      <label>{label}</label>
      <p>{value}</p>
    </div>
  );
};

export default OutputField;

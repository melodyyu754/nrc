import React from 'react';

interface Props {
  onClick: () => void;
}

const CalculateButton= ({ onClick }: Props) => {
  return <button onClick={onClick}>Calculate</button>;
};

export default CalculateButton;

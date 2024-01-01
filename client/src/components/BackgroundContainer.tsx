import React, { ReactNode } from 'react';
import backgroundImage from '../assets/bg.jpg';

interface BackgroundContainerProps {
  children: ReactNode;
}

const BackgroundContainer = ({ children }: BackgroundContainerProps) => {
  return (
    <div
      className="image"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: 'white'
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundContainer;

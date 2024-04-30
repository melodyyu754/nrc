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
        color: 'white',
        position: 'relative',
        zIndex: 0 // Important for stacking the pseudo-element behind the children
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Black with 50% opacity
        filter: 'brightness(50%)',
        zIndex: 1 // Important for stacking the pseudo-element behind the children
      }}>
      </div>
      <div style={{
        position: 'relative',
        zIndex: 2 // Important for stacking the children above the overlay
      }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundContainer;

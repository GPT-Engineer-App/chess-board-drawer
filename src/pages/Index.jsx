import React from "react";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="relative w-96 h-96">
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
          <circle cx="100" cy="100" r="90" stroke="black" strokeWidth="1" fill="none" />
          <circle cx="100" cy="100" r="50" stroke="black" strokeWidth="1" fill="none" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="black" strokeWidth="1" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="black" strokeWidth="1" />
          <path d="M 10 100 A 90 90 0 0 1 100 10" stroke="black" strokeWidth="1" fill="none" />
          <path d="M 100 10 A 90 90 0 0 1 190 100" stroke="black" strokeWidth="1" fill="none" />
          <path d="M 190 100 A 90 90 0 0 1 100 190" stroke="black" strokeWidth="1" fill="none" />
          <path d="M 100 190 A 90 90 0 0 1 10 100" stroke="black" strokeWidth="1" fill="none" />
          <circle cx="100" cy="10" r="2" fill="black" />
          <circle cx="190" cy="100" r="2" fill="black" />
          <circle cx="100" cy="190" r="2" fill="black" />
          <circle cx="10" cy="100" r="2" fill="black" />
          <circle cx="100" cy="100" r="2" fill="black" />
          <circle cx="50" cy="50" r="2" fill="black" />
          <circle cx="150" cy="50" r="2" fill="black" />
          <circle cx="150" cy="150" r="2" fill="black" />
          <circle cx="50" cy="150" r="2" fill="black" />
        </svg>
      </div>
    </div>
  );
};

export default Index;
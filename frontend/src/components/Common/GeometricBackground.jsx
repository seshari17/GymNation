import React from 'react';

const GeometricBackground = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Hexagonal pattern overlay */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-10" 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="hexagons" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <polygon 
              points="10,2 18,7 18,13 10,18 2,13 2,7" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" className="text-blue-400" />
      </svg>
      
      {/* Gradient lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent transform rotate-12" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/15 to-transparent transform -rotate-12" />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-10 right-10 w-6 h-6 border border-blue-400/30 rotate-45" />
      <div className="absolute bottom-20 left-8 w-4 h-4 border border-purple-400/20 rotate-12" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full" />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple-400/30 rounded-full" />
    </div>
  );
};

export default GeometricBackground;
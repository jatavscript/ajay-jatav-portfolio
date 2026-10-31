import React from 'react';

interface CircularStampProps {
  text?: string;
  className?: string;
  size?: number; // diameter in px
  color?: string;
  opacity?: number;
  rotate?: boolean;
}

export const CircularStamp: React.FC<CircularStampProps> = ({
  text = "it's not just editing it's vibing with visuals • ",
  className = "",
  size = 200,
  color = "#ffffff",
  opacity = 0.25,
  rotate = true,
}) => {
  const radius = 70;
  const viewBoxSize = 200;
  const center = viewBoxSize / 2;

  // Repeat text if necessary to form a full circle
  const fullText = text.length < 35 ? `${text} ${text} ${text}` : `${text} ${text}`;

  return (
    <div 
      className={`pointer-events-none select-none ${rotate ? 'animate-spin-slow' : ''} ${className}`}
      style={{ width: size, height: size, opacity }}
    >
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <path
            id="stampCirclePath"
            d={`M ${center},${center} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text
          fill={color}
          fontSize="11"
          fontWeight="600"
          letterSpacing="2.5"
          className="font-sans uppercase"
        >
          <textPath href="#stampCirclePath" startOffset="0%">
            {fullText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};


import React from 'react';

const GustoLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="100"
    height="30"
    viewBox="0 0 100 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="Playfair Display, serif"
      fontSize="24"
      fontWeight="bold"
      fill="currentColor"
    >
      Gusto
    </text>
  </svg>
);

export default GustoLogo;

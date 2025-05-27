import React from 'react';
import powerbi from '../assets/image/powerbi.png';
import bigml from '../assets/image/bigml.png';
import up from '../assets/image/up.png';
import pw1 from '../assets/image/pw1.png';
import excel from '../assets/image/Excel.png';
import database from '../assets/image/database.png';

const LogosMarquee = () => {
  const logos = [powerbi, bigml, up, pw1, excel, database];

  return (
    <>
    <div className="relative overflow-hidden bg-white py-3 ">
      {/* Inline animation style */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="flex w-max animate-[scroll_30s_linear_infinite] gap-12">
        {logos.concat(logos).map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`logo-${i}`}
            className="h-16 w-auto object-contain"
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default LogosMarquee;

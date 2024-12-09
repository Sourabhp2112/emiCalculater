import React from 'react';

function EmiAmount({ principal, rate, duration }) {
  let calculateEMI = (P, R, N) => {
    R = R / 12 / 100; 
    let emi = Math.floor((P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1));
    return emi.toFixed(2); 
  };

  let emi = calculateEMI(principal, rate, duration);

  return (
    <div className="emiBox">
      <p>Your Monthly EMI is <span className='emiAmount'>₹ {emi}</span></p>
    </div>

  );
}

export default EmiAmount;
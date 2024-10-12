import React, { useState, useMemo } from 'react';

function FactorialCalculator() {
  const [number, setNumber] = useState(1);

  const factorial = useMemo(() => {
    const calculateFactorial = (n) => {
      if (n <= 1) return 1;
      return n * calculateFactorial(n - 1);
    };

    return calculateFactorial(number);
  }, [number]);

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Factorial of {number} is {factorial}</p>
    </div>
  );
}

export default FactorialCalculator;

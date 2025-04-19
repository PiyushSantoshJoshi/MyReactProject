import React, { useState } from 'react';

export default function CalciDesign() {
  const [num, setNum] = useState('0'); 
  const [equation, setEquation] = useState({ a: 0, b: 0, operator: '' }); 

  const clearAC = () => {
    setNum('0');
    setEquation({ a: 0, b: 0, operator: '' });
  };

  const clear = () => {
    setNum((prev) => {
      if (prev.length <= 1) return '0';
      return prev.slice(0, -1);
    });
  };

  const opr = (op) => {
    if(equation.operator=="")
    {
        setEquation({ a: parseFloat(num), b: 0, operator: op });
    }
    else if(equation.operator=="+")
    {
        setEquation({ a: equation.a+parseFloat(num), b: 0, operator: op });
    }
    else if(equation.operator=="-")
        {
            setEquation({ a: equation.a-parseFloat(num), b: 0, operator: op });
        }
    
    setNum('0');
  };

  const equal = () => {
    const b = parseFloat(num);
    let result;
    switch (equation.operator) 
    {
      case '+':
        result = equation.a + b;
        break;
     case '-':
            result = equation.a - b;
            break;  
      default:
        return;
    }
    setNum(result.toString());
    setEquation({ a: result, b: 0, operator: '' });
  };

  const display = (num1) => {
    setNum((prev) => (prev === '0' ? num1.toString() : prev + num1.toString()));
  };

  const addDecimal = () => {
    setNum((prev) => (prev.includes('.') ? prev : prev + '.'));
  };

  return (
    <div className="container calculator">
      <style jsx>{`
        .calculator {
          max-width: 400px;
          margin: 50px auto;
        }
        .btn {
          height: 60px;
          font-size: 1.5rem;
        }
        .display {
          height: 60px;
          font-size: 1.5rem;
          text-align: right;
          padding: 10px;
          border: 1px solid #333;
          background-color: #f8f9fa;
        }
      `}</style>
      <div className="card shadow">
        <div className="card-body">
          <div className="display mb-3">{num}</div>
          <div className="row g-2">
            {/* Row 1 */}
            <div className="col-3">
              <button onClick={() => display(7)} className="btn btn-secondary w-100">7</button>
            </div>
            <div className="col-3">
              <button onClick={() => display(8)} className="btn btn-secondary w-100">8</button>
            </div>
            <div className="col-3">
              <button onClick={() => display(9)} className="btn btn-secondary w-100">9</button>
            </div>
            <div className="col-3">
              <button className="btn btn-warning w-100">/</button>
            </div>
            {/* Row 2 */}
            <div className="col-3">
              <button onClick={() => display(4)} className="btn btn-secondary w-100">4</button>
            </div>
            <div className="col-3">
              <button onClick={() => display(5)} className="btn btn-secondary w-100">5</button>
            </div>
            <div className="col-3">
              <button onClick={() => display(6)} className="btn btn-secondary w-100">6</button>
            </div>
            <div className="col-3">
              <button className="btn btn-warning w-100">*</button>
            </div>
            {/* Row 3 */}
            <div className="col-3">
              <button onClick={() => display(1)} className="btn btn-secondary w-100">1</button>
            </div>
            <div className="col-3">
              <button onClick={() => display(2)} className="btn btn-secondary w-100">2</button>
            </div>
            <div className="col-3">
              <button onClick={() => display(3)} className="btn btn-secondary w-100">3</button>
            </div>
            <div className="col-3">
              <button onClick={() => opr("-")} className="btn btn-warning w-100">-</button>
            </div>
            {/* Row 4 */}
            <div className="col-3">
              <button onClick={() => display(0)} className="btn btn-secondary w-100">0</button>
            </div>
            <div className="col-3">
              <button onClick={addDecimal} className="btn btn-secondary w-100">.</button>
            </div>
            <div className="col-3">
              <button onClick={equal} className="btn btn-success w-100">=</button>
            </div>
            <div className="col-3">
              <button onClick={() => opr("+")} className="btn btn-warning w-100">+</button>
            </div>
            {/* Clear Buttons */}
            <div className="col-6">
              <button onClick={clear} className="btn btn-danger w-100">C</button>
            </div>
            <div className="col-6">
              <button onClick={clearAC} className="btn btn-danger w-100">AC</button>
            </div>
          </div>
        </div>
      </div>
      a={equation.a} b = {equation.b} num = {num}  operator={equation.operator}
    </div>
    
  );
}
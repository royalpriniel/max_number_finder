import React, { useState } from 'react';

const MaxNumberFinder = () => {
  const [userInput, setUserInput] = useState('25, 35, 32, 0, 1, 99, 15');
  const [maxNumber, setMaxNumber] = useState(null);

  const findMax = (e) => {
    e.preventDefault();

    // Convert the string into an array of numbers
    // 1. Split by comma
    // 2. Map through and convert to Number
    // 3. Filter out any non-numeric entries
    const numArray = userInput
      .split(',')
      .map(num => Number(num.trim()))
      .filter(num => !isNaN(num));

    if (numArray.length > 0) {
      // Use the spread operator just like in your original code
      const max = Math.max(...numArray);
      setMaxNumber(max);
    } else {
      alert("Please enter a valid list of numbers separated by commas.");
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '400px', 
      margin: '20px auto', 
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      border: '1px solid #eee',
      borderRadius: '12px',
      textAlign: 'center'
    }}>
      <h3>Find the Maximum Number</h3>
      
      <form onSubmit={findMax}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem' }}>
            Enter numbers separated by commas:
          </label>
          <input 
            type="text" 
            value={userInput} 
            onChange={(e) => setUserInput(e.target.value)} 
            placeholder="e.g. 10, 50, 20"
            style={{ 
              width: '100%', 
              padding: '10px', 
              borderRadius: '6px', 
              border: '1px solid #ccc',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <button type="submit" style={{ 
          padding: '10px 25px', 
          backgroundColor: '#28a745', 
          color: 'white', 
          border: 'none', 
          borderRadius: '6px', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Find Max Value
        </button>
      </form>

      {maxNumber !== null && (
        <div style={{ marginTop: '20px' }}>
          <p style={{ color: '#666' }}>The highest number in your set is:</p>
          <div style={{ 
            fontSize: '2.5rem', 
            color: '#28a745', 
            fontWeight: '900' 
          }}>
            {maxNumber}
          </div>
        </div>
      )}
    </div>
  );
};

export default MaxNumberFinder;
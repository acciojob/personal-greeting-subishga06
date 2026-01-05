import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={handleChange} 
      />
      {name && <h1>Hello, {name}!</h1>}
    </div>
  );
};

export default Greeting;

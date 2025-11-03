import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <h1>React + TypeScript + Webpack</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
      </div>
    </div>
  );
};

export default App;
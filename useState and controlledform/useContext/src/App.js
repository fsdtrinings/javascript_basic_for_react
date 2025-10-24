import logo from './logo.svg';
import './App.css'; import { useState } from 'react';
import FruitContext from './FruitContext';
import A from './A';import B from './B';

function App() {
  const [fruit,setFruit] = useState("");
  return (
    <FruitContext.Provider value={{fruit,setFruit}}>
        <div>
            <A/>   <hr/>      <B/>
        </div>
    </FruitContext.Provider>
  );
}

export default App;

import { useState } from 'react';
import './style.css';

function Main() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <div className='card'>
        <div className='screen'>
          <span>1250:20</span>
          <h1>6250</h1>
        </div>
        <div className='numbers'>
          <button>.</button>
          <button>0</button>
          <button>B</button>
          <button>=</button>
          <button>.</button>
          <button>0</button>
          <button>B</button>
          <button>=</button>
          <button>.</button>
          <button>0</button>
          <button>B</button>
          <button>=</button>
          <button>.</button>
          <button>0</button>
          <button>B</button>
          <button>=</button>
          <button>.</button>
          <button>0</button>
          <button>B</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default Main;

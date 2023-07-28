import { useState } from 'react';
import './style.css';
import ButtonCalc from '../../assets/Buttoncalc';

function Main() {
  const [buttonscalc, setButtonCalc] = useState([...ButtonCalc]);

  return (
    <div className='container'>
      <div className='card'>
        <div className='screen'>
          <span>1250:20</span>
          <h1>6250</h1>
        </div>
        <div className='numbers'>
          {buttonscalc.map((buttoncalc) => (
            <button
              key={buttoncalc.id}
              className={buttoncalc.color}
            >{buttoncalc.value}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;

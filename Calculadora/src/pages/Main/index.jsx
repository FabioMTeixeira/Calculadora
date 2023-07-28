import { useState } from 'react';
import './style.css';
import ButtonCalc from '../../components/Buttoncalc';

function Main() {
  const [buttonscalc, setButtonCalc] = useState([...ButtonCalc]);
  const [touchedButton, setTouchedButton] = useState([]);

  function handleShowButtons(newValue) {
    const localTouchedButton = [...touchedButton];


    const addButton = buttonscalc.find((button) => button.value === newValue);

    if (addButton.value === 'C') {
      localTouchedButton.splice(0, localTouchedButton.length);
      setTouchedButton(localTouchedButton);
      return;
    }

    localTouchedButton.push(addButton.value);
    setTouchedButton(localTouchedButton);

  }

  return (
    <div className='container'>
      <div className='card'>
        <div className='screen'>
          <span>{console.log(touchedButton)}</span>
          <h1>6250</h1>
        </div>
        <div className='numbers'>
          {buttonscalc.map((buttoncalc) => (
            <button
              key={buttoncalc.id}
              className={buttoncalc.color}
              onClick={() => handleShowButtons(buttoncalc.value)}
            >{buttoncalc.value}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;

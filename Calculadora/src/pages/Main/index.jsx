import { useState } from 'react';
import './style.css';
import ButtonCalc from '../../components/Buttoncalc';

// fazer um state para guardar o 1 numero e outro para guardar o 2 numero, usar um if para quando ela usar um sinal, colocar na primeira ou na segunda

function Main() {
  const [buttonscalc, setButtonCalc] = useState([...ButtonCalc]);
  const [touchedButton, setTouchedButton] = useState([]);
  const [onScreen, setOnScreen] = useState('0');
  const [operator, setOperator] = useState('');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [discoveryNum2, setDiscoveryNum2] = useState(0);
  const [result, setResult] = useState(0);

  function handleShowButtons(newValue) {
    const localTouchedButton = [...touchedButton];

    const addButton = buttonscalc.find((button) => button.value === newValue);

    if (addButton.value === 'C') {
      localTouchedButton.splice(0, localTouchedButton.length);
      setTouchedButton(localTouchedButton);
      setOnScreen(0);
      setResult(0);
      return;
    }

    if (addButton.operator && addButton.value !== '=') {
      setNum1(parseFloat(localTouchedButton.join('')));
      setOperator(addButton.value);
      setDiscoveryNum2(localTouchedButton.length + 1);
    } else if (addButton.operator && addButton.value === '=') {
      const number2 = (parseFloat(localTouchedButton.slice(discoveryNum2, localTouchedButton.length).join('')));
      setNum2(number2);

      if (operator === '+') {
        setResult(num1 + number2);
        setTouchedButton([]);
        setOnScreen(0);
        return;
      }
      else if (operator === '-') {
        setResult(num1 - number2);
        setTouchedButton([]);
        setOnScreen(0);
        return;
      }
      else if (operator === '*') {
        setResult(num1 * number2);
        setTouchedButton([]);
        setOnScreen(0);
        return;
      }
      else if (operator === '/') {
        setResult(num1 / number2);
        setTouchedButton([]);
        setOnScreen(0);
        return;
      }
    }

    localTouchedButton.push(addButton.value);
    setTouchedButton(localTouchedButton);

    if (addButton.value) {
      setOnScreen(localTouchedButton);
    }

  }

  return (
    <div className='container'>
      <div className='card'>
        <div className='screen'>
          <span>{onScreen}</span>
          <h1>{result}</h1>
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

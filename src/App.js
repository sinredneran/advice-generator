import { useState } from "react";


import Text from './components/Text';
import './style/app.scss';
import mobileDivide from "./images/pattern-divider-mobile.svg";
import desktopDivide from "./images/pattern-divider-desktop.svg";
import diceImg from "./images/icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('0');
  function getAdvice() {
    fetch("https://api.adviceslip.com/advice").then(response => {
      return response.json();
    }).then(adviceData => {
      setAdviceId(adviceData.slip.id);
      setAdvice(adviceData.slip.advice);
    }).catch(error => {
      console.log(error);
    });
  }

  window.onload = () => {
    getAdvice();
  }

  return (
    <div className="App">
      <div className="container">
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/sinredneran">sinredneran</a>.
      </div>
      <div className="content">
        <Text adviceId={adviceId} advice={advice} />
        <img className='divider desktop-img' src={desktopDivide} alt="divider" />
        <img className='divider mobile-img' src={mobileDivide} alt="divider" />
        <button className='btn' onClick={getAdvice}>
          <img className='dice' src={diceImg} alt="randomise" />
        </button>
      </div>
      </div>
    </div>
  );
}

export default App;

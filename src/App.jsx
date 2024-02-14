import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sum , subtract ,division , multiply } from '../features/calculator/calculatorSlice';
import './App.css'


function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setsecondNumber] = useState("");


  let resultState = useSelector((state) =>{
   return state.calcuator.value 
});
 
 
  const dispatch = useDispatch();

  function handleSumclicked() {
    dispatch(sum({
      firstNumber:firstNumber,
      secondNumber:secondNumber
    }));
  }

  function handleSupractclicked() {
    dispatch(subtract({
      firstNumber:firstNumber,
      secondNumber:secondNumber
    }));
  }

  function handleMultiplyclicked() {
    dispatch(multiply({
      firstNumber:firstNumber,
      secondNumber:secondNumber
    }));
  }

  function handledivisionclicked() {
    dispatch(division({
      firstNumber:firstNumber,
      secondNumber:secondNumber
    }));
  }
  
  function handleRest( ) {
    setFirstNumber("");
    setsecondNumber("");
  } 
  return (
    <>
    <div className="container">
      <div className="content">
        <div className='screen border'>{resultState }</div>
        <div className="inputs">
          <label> First num:</label>
          <input  type="text"
          value={firstNumber}
          onChange={(e)=>{
            setFirstNumber(e.target.value);
          }}
          />
          <label> Second num:</label>
          <input type="text"
          value={secondNumber}
          onChange={(e)=>{
            setsecondNumber(e.target.value);
          }}
          />
          <div className="btns">
            <button onClick={handleSumclicked}>+</button>
            <button onClick={handleSupractclicked}>-</button>
            <button onClick={handleMultiplyclicked}>*</button>
            <button onClick={handledivisionclicked}>/</button>
            <button onClick={handleRest}>Rest</button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App

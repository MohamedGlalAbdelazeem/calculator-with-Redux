import { createSlice } from "@reduxjs/toolkit";

  const initialState ={
      result:0,
  }

const calculatorslice = createSlice({
    name:"claculator",
    initialState:initialState,
    reducers:{
        sum:(currentState , action)=>{
           const {firstNumber , secondNumber } = action.payload;
         currentState.value = Number(firstNumber) + Number(secondNumber) ;
        },
        subtract:(currentState , action)=>{
            const {firstNumber , secondNumber } = action.payload;
            currentState.value = Number(firstNumber) -  Number(secondNumber);
          },
          multiply:(currentState , action)=>{
            const x = Number(action.payload.firstNumber) * Number(action.payload.secondNumber); 
           currentState.value = x;
          },
          division:(currentState , action)=>{
            const x = Number(action.payload.firstNumber) / Number(action.payload.secondNumber); 
           currentState.value = x;
          },
    }
});

export const {sum , subtract , multiply , division} = calculatorslice.actions;
export default calculatorslice.reducer;

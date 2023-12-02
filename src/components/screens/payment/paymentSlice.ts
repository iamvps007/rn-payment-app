import { createSlice } from '@reduxjs/toolkit'
import Wallet from '../wallet';


const initialState = {

    
    payment: []
   
  }
  
  export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
      sendMoney: (state, payload) => {
        state.payment.unshift(payload.payload);
      },
 
     
    },
  })

  export const { sendMoney } = paymentSlice.actions;

  export default paymentSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'
import Wallet from '../wallet';


const initialState = {
     
  users : [
      { name: 'Vaibhav', id: 'PWLT-0001', wallet:1000, },
      { name: 'Vivek', id: 'PWLT-0002', wallet:1000, },
      { name: 'Manus', id: 'PWLT-0003', wallet:1000, },
      { name: 'Dev', id: 'PWLT-0004', wallet:1000, },  
    ],
    selectedUser : {}

  }
  
  export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      reduceMoney: (state, payload) => {
        state.selectedUser.wallet = state.selectedUser.wallet - payload.payload;
        state.users = state.users.map(user => {
          if (user.id === state.selectedUser.id) {
            user.wallet = state.selectedUser.wallet;
          }
          return user;
        });
        


      },
      setSelectedUser: (state, payload) => {
        console.log(state.users.filter(user => user.id === payload.payload.id), payload);
        const user = state.users.filter(user => user.id === payload.payload.id)
        state.selectedUser = user[0];
      },

      
     
    },
  })

  export const { reduceMoney, setSelectedUser } = counterSlice.actions;

  export default counterSlice.reducer;
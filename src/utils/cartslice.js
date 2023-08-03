import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"cart", 
    initialState:{
        items:[]
    }, 
    reducers:{
        additem:(state, action)=>{
          state.items.push(action.payload)
        },
        clearcart:(state)=>{
            state.items=[]
        }
    }
})

// export default cartslice.actions;
export default cartslice.reducer;
export const {additem, clearcart}=cartslice.actions;
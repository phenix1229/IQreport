import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
        firstName:'',
        lastName:'',
        email:''
    }
}

export const selectedUserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setSelectedUser: (state, action) => {
            state.user = action.payload;
            window.sessionStorage.setItem("selectedUserSlice", JSON.stringify(action.payload))
        }
    }
})

export const {setSelectedUser} = selectedUserSlice.actions;

export default selectedUserSlice.reducer;
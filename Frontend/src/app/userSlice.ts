import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
        firstName:'',
        lastName:'',
        email:''
    }
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload;
            window.sessionStorage.setItem("user", JSON.stringify(action.payload))
        }
    }
})

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
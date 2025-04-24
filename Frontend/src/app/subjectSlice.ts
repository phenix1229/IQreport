import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subject:{
        firstName:'',
        lastName:'',
        email:'',
        reports:[]
    }
}

export const subjectSlice = createSlice({
    name:'subject',
    initialState,
    reducers:{
        setSubject: (state, action) => {
            state.subject = action.payload;
            window.sessionStorage.setItem("subject", JSON.stringify(action.payload))
        }
    }
})

export const {setSubject} = subjectSlice.actions;

export default subjectSlice.reducer;
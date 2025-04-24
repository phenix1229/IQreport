import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subject:{
        firstName:'',
        lastName:'',
        email:'',
        reports:[]
    }
}

export const selectedSubjectSlice = createSlice({
    name:'subject',
    initialState,
    reducers:{
        setSelectedSubject: (state, action) => {
            state.subject = action.payload;
            window.sessionStorage.setItem("selectedSubjectSlice", JSON.stringify(action.payload))
        }
    }
})

export const {setSelectedSubject} = selectedSubjectSlice.actions;

export default selectedSubjectSlice.reducer;
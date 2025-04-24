import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subjects:[]
}

export const subjectsSlice = createSlice({
    name:'subjects',
    initialState,
    reducers:{
        setSubjects: (state, action) => {
            state.subjects = action.payload;
            window.sessionStorage.setItem("subjects", JSON.stringify(action.payload))
        }
    }
})

export const {setSubjects} = subjectsSlice.actions;

export default subjectsSlice.reducer;
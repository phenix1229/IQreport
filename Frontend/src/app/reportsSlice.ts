import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reports:[]
}

export const reportsSlice = createSlice({
    name:'report',
    initialState,
    reducers:{
        setReports: (state, action) => {
            state.reports = action.payload;
            window.sessionStorage.setItem("reports", JSON.stringify(action.payload))
        }
    }
})

export const {setReports} = reportsSlice.actions;

export default reportsSlice.reducer;
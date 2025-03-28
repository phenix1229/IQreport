import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import selectedUserReducer from './selectedUserSlice';


const rootReducer = combineReducers({
    auth: authReducer,
    selectedUser:selectedUserReducer
})


export const store = configureStore({
    reducer:rootReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
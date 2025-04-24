import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import selectedUserReducer from './selectedSubjectSlice';
import subjectsReducer from './subjectsSlice';
import subjectReducer from './subjectSlice';
import selectedSubjectReducer from './selectedSubjectSlice'
import reportsReducer from './reportsSlice';
import reportReducer from './reportSlice';


const rootReducer = combineReducers({
    auth: authReducer,
    selectedUser:selectedUserReducer,
    subjects:subjectsReducer,
    subject:subjectReducer,
    selectedSubject:selectedSubjectReducer,
    reports:reportsReducer,
    report:reportReducer
})


export const store = configureStore({
    reducer:rootReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
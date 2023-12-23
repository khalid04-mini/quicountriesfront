import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    username : "",
    difficulty : "",
    // quizzes : [],
    // date_start :"",
    // date_end:"",
}

const homeSlice = createSlice({
    name : "home",
    initialState,
    reducers :{
        setUsername(state, action){
            state.username = action.payload;
        },
        setdifficulty(state,action){
            state.difficulty =action.payload
        }
    }
})

export const {setUsername, setdifficulty} =homeSlice.actions;

export default homeSlice.reducer;
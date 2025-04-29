import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   
    course: JSON.parse(localStorage.getItem("courses")) || [],
};
const CourseSlice = createSlice({
         name:'courses',
         initialState,
         reducers: {
            setCourses: (state, action)=>{
                 state.course = action.payload;
                 localStorage.setItem("courses", JSON.stringify(state.course));
            }
         }
});



export const { setCourses} = CourseSlice.actions;
export default CourseSlice.reducer; 
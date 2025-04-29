import { configureStore } from '@reduxjs/toolkit'
import coursereducer from './Slices/CourseSlice';
import profilereducer from './Slices/ProfileSlice';
const store = configureStore({
    reducer: {
    courses: coursereducer,
    user: profilereducer,
    },

})

export default store;
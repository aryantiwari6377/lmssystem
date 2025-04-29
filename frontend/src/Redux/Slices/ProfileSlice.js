// src/redux/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileImage: null, // Default value
  userDetails: {},
};

const ProfileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
    setUserDetails: (state, action) => {
        state.userDetails = action.payload;
      },
      clearUserData: (state) => {
        state.profileImage = null;
        state.userDetails = {};
      }
  },
});

// Export the action to be dispatched
export const { setProfileImage, setUserDetails,  clearUserData } = ProfileSlice.actions;

// Export the reducer to be included in the store
export default ProfileSlice.reducer;

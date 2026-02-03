import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userName: "",
  },

  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userName = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userName = "";
    },
  },
  
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

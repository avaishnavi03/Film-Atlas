import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
import watchlistReducer from "./watchlistSlice";


// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    // user: userReducer,
    watchlist: watchlistReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;

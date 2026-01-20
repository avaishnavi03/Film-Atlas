import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id: number;
  title: string;
  poster_path:string;
  type: "movie" | "tv";
}

const savedWatchlist: Movie[] =
  JSON.parse(localStorage.getItem("watchlist") || "[]");

  interface WatchlistState {
  items: Movie[];
}

const initialState: WatchlistState = {
  items: savedWatchlist,
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<Movie>) => {
      const exists = state.items.find(
        (movie) => movie.id === action.payload.id
      );
       if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem("watchlist", JSON.stringify(state.items));
      }
    },


    removeFromWatchlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (movie) => movie.id !== action.payload
      );
      localStorage.setItem("watchlist", JSON.stringify(state.items));
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;


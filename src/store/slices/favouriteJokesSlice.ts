import { createSlice } from "@reduxjs/toolkit";

interface FavouriteJokes {
  favouriteJokes: {
    joke: string;
    id: string;
  }[];
}

const initialState: FavouriteJokes = {
  favouriteJokes: [],
};

export const favouriteJokesSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {
    addJokeToFavourites: (state, action) => {
      state.favouriteJokes.push(action.payload);
    },
    removeJokeFromFavourites: (state, action) => {
      state.favouriteJokes.splice(action.payload, 1);
    },
  },
});

export const { addJokeToFavourites, removeJokeFromFavourites } =
  favouriteJokesSlice.actions;

export default favouriteJokesSlice.reducer;

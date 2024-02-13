import { createSlice } from "@reduxjs/toolkit";

export interface ListOfJokes {
  listOfJokes: {
    joke: string;
    id: string;
  }[];
}

const initialState: ListOfJokes = {
  listOfJokes: [],
};

export const listOfJokesSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {
    addJokeToList: (state, action) => {
      state.listOfJokes = action.payload;
    },
  },
});

export const { addJokeToList } = listOfJokesSlice.actions;

export default listOfJokesSlice.reducer;

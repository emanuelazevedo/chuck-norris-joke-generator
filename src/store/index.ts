import { configureStore } from "@reduxjs/toolkit";
import listOfJokesReducer from "./slices/jokeSlice";
import favouriteJokesReducer from "./slices/favouriteJokesSlice";

export const store = configureStore({
  reducer: {
    listOfJokes: listOfJokesReducer,
    favouriteJokes: favouriteJokesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from "./slices";

import { ListOfJokes } from "../../store/slices/jokeSlice";

export interface JokeComponentProps {
  listOfJokes: {
    joke: string;
    id: string;
  }[];
}

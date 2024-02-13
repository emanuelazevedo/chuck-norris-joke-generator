import axios from "axios";
import { useDispatch } from "react-redux";
import { addJokeToList } from "../../store/slices/jokeSlice";
import { useDidMount } from "../useDidMount";

export interface FetchJokesByCategoryInputProps {
  category: string;
}

interface FetchJokesByCategoryOutputProps {
  fetch: ({ category }: FetchJokesByCategoryInputProps) => void;
}

export const useFetchJokesByCategory = (): FetchJokesByCategoryOutputProps => {
  const dispatch = useDispatch();

  const fetch = ({ category }: FetchJokesByCategoryInputProps) => {
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((res) => {
        if (res.data) {
          dispatch(addJokeToList([{ joke: res.data.value, id: res.data.id }]));
        }
      });
  };

  return { fetch };
};

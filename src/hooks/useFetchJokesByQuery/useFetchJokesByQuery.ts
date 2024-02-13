import axios from "axios";
import { useDispatch } from "react-redux";
import { addJokeToList } from "../../store/slices/jokeSlice";
import { useDidMount } from "../useDidMount";

export interface FetchJokesBySearchInputProps {
  searchValue: string;
}

interface FetchJokesBySearchOutputProps {
  fetch: ({ searchValue }: FetchJokesBySearchInputProps) => void;
}

export const useFetchJokesByQuery = (): FetchJokesBySearchOutputProps => {
  const dispatch = useDispatch();

  const fetch = ({ searchValue }: FetchJokesBySearchInputProps) => {
    axios
      .get(`https://api.chucknorris.io/jokes/search?query=${searchValue}`)
      .then((res) => {
        if (res.data) {
          if (res.data.total === 0) {
            dispatch(addJokeToList([]));
            dispatch(
              addJokeToList([
                "Opps... it seems we can't find any joke about that subject",
              ])
            );
          } else {
            const listOfJokesAux = res.data.result.map((joke: any) => {
              return {
                joke: joke.value,
                id: joke.id,
              };
            });
            dispatch(addJokeToList(listOfJokesAux));
          }
        }
      });
  };

  return { fetch };
};

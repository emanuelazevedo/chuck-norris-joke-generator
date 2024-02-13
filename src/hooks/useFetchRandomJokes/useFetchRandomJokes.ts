import axios from "axios";
import { useDispatch } from "react-redux";
import { addJokeToList } from "../../store/slices/jokeSlice";
import { useDidMount } from "../useDidMount";

export const useFetchRandomJokes = (): void => {
  const dispatch = useDispatch();

  const fetch = () => {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      if (res.data) {
        console.log("joke", res.data.value);
        dispatch(addJokeToList([{ joke: res.data.value, id: res.data.id }]));
      }
    });
  };

  useDidMount(() => {
    fetch();
  });
};

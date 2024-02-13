import axios from "axios";
import { useState } from "react";
import { useDidMount } from "../useDidMount";

export const useFetchJokesCategories = (): {
  data: string[];
} => {
  const [data, setData] = useState<string[]>([]);

  const fetch = () => {
    axios.get("https://api.chucknorris.io/jokes/categories").then((res) => {
      if (res.data) {
        res.data.push("Favourites") && setData(res.data as string[]);
      }
    });
  };

  useDidMount(() => {
    fetch();
  });

  return { data };
};

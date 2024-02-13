import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useFetchJokesCategories,
  useFetchRandomJokes,
  useFetchJokesByCategory,
  FetchJokesByCategoryInputProps,
  useFetchJokesByQuery,
} from "../../hooks";
import { RootState, addJokeToList, ListOfJokes } from "../../store";

export const useAppHelper = () => {
  // const [listOfJokes, setListOfJokes] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchValue, setSeachValue] = useState<string>("");

  const { data } = useFetchJokesCategories();
  const fetchJokes = useFetchRandomJokes();
  const { fetch: fetchJokesByCategory } = useFetchJokesByCategory();
  const { fetch: fetchJokesByQuery } = useFetchJokesByQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    setCategories(data);
  }, [data]);

  const listOfJokes = useSelector(
    (state: RootState) => state.listOfJokes as ListOfJokes
  );

  const favouriteJokes = useSelector(
    (state: RootState) => state.favouriteJokes.favouriteJokes
  );

  const handleOnClickCategory = (category: string) => {
    if (category === "Favourites") {
      dispatch(addJokeToList(favouriteJokes));
    } else {
      fetchJokesByCategory({
        category,
      } as FetchJokesByCategoryInputProps);
    }
  };

  const handleOnChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSeachValue(e.target.value);
  };

  const handleOnClickSearch = (e: any) => {
    e.preventDefault();
    fetchJokesByQuery({ searchValue });
  };

  return {
    categories,
    searchValue,
    handleOnClickCategory,
    handleOnChangeSearch,
    handleOnClickSearch,
    listOfJokes,
  };
};

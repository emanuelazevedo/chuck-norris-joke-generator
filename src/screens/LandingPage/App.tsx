import React from "react";
import {
  JokeComponent,
  NavbarComponent,
  SearchBarComponent,
} from "../../components";
import { useAppHelper } from "./App.helper";

export const App = () => {
  const {
    categories,
    searchValue,
    handleOnClickCategory,
    handleOnChangeSearch,
    handleOnClickSearch,
    listOfJokes,
  } = useAppHelper();

  return (
    <div className="flex flex-col justify-center">
      <NavbarComponent
        categories={categories}
        handleOnClickCategory={handleOnClickCategory}
      />
      <SearchBarComponent
        searchValue={searchValue}
        handleOnChangeSearch={handleOnChangeSearch}
        handleOnClickSearch={handleOnClickSearch}
      />
      <JokeComponent listOfJokes={listOfJokes.listOfJokes} />
    </div>
  );
};

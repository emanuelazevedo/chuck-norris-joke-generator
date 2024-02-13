import React from "react";
import { SearchBarComponentProps } from "./searchbarComponent.types";

export const SearchBarComponent: React.FC<SearchBarComponentProps> = ({
  searchValue,
  handleOnChangeSearch,
  handleOnClickSearch,
}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <input
        className="text-black text-center"
        value={searchValue}
        onChange={handleOnChangeSearch}
      />
      <button className="" type="button" onClick={handleOnClickSearch}>
        Search
      </button>
    </div>
  );
};

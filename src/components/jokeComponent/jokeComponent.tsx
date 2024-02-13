import React from "react";
import { JokeComponentProps } from "./jokeComponent.types";
import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addJokeToFavourites,
  removeJokeFromFavourites,
} from "../../store/slices/favouriteJokesSlice";
import { RootState } from "../../store";

export const JokeComponent: React.FC<JokeComponentProps> = ({
  listOfJokes,
}) => {
  const dispatch = useDispatch();

  const favouriteJokes = useSelector(
    (state: RootState) => state.favouriteJokes.favouriteJokes
  );

  return (
    <div className="">
      {listOfJokes.map &&
        listOfJokes.map((jokeFromList) => (
          <div
            key={jokeFromList.id}
            className="flex justify-center items-center mt-8"
          >
            <div className="flex justify-center text-center border-2 border-orange-400 rounded-lg w-1/2 min-h-20 p-8">
              {jokeFromList.joke}
            </div>
            {favouriteJokes.find((joke) => joke.id === jokeFromList.id) ? (
              <StarFilledIcon
                className="ml-3 w-7 h-7"
                onClick={() =>
                  dispatch(
                    removeJokeFromFavourites(
                      favouriteJokes.findIndex(
                        (joke) => joke.id === jokeFromList.id
                      )
                    )
                  )
                }
              />
            ) : (
              <StarIcon
                className=" ml-3 w-7 h-7"
                onClick={() => dispatch(addJokeToFavourites(jokeFromList))}
              />
            )}
          </div>
        ))}
    </div>
  );
};

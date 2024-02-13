import React from "react";
import { NavBarProps } from "./navbarComponent.type";

export const NavbarComponent: React.FC<NavBarProps> = ({
  categories,
  handleOnClickCategory,
}) => {
  return (
    <div className="flex flex-wrap justify-center h-10 mt-4 mb-4">
      {categories &&
        categories.map((categ) => (
          <div
            className="basis-4 mt-2 mr-5 text-base hover:text-lg"
            onClick={() => handleOnClickCategory(categ)}
          >
            {categ}
          </div>
        ))}
    </div>
  );
};

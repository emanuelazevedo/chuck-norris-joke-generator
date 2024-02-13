import { ChangeEvent } from "react";

export interface SearchBarComponentProps {
  searchValue: string;
  handleOnChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnClickSearch: (e: any) => void;
}

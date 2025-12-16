import { memo } from "react";
import { HomeHeader } from "../header";
import { SearchInput } from "../search-input";

export const RenderHeader = memo(
  ({
    searchInputText,
    setSearchInputText,
  }: {
    searchInputText: string;
    setSearchInputText: React.Dispatch<React.SetStateAction<string>>;
  }) => (
    <>
      <HomeHeader />
      <SearchInput
        inputValue={searchInputText}
        setSearchInputText={setSearchInputText}
      />
    </>
  )
);

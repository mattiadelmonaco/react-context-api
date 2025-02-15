import { createContext, useState, useContext } from "react";

const SearchBarContext = createContext();

function SearchBarProvider({ children }) {
  const [search, setSearch] = useState("");

  return (
    <SearchBarContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchBarContext.Provider>
  );
}

function useSearchBarContext() {
  const context = useContext(SearchBarContext);
  return context;
}

export { SearchBarProvider, useSearchBarContext };

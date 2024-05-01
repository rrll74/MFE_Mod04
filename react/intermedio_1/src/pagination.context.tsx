import React from "react";

interface PageContext {
  page: number;
  setPage: (value: number) => void;
}

export const MyContext = React.createContext<PageContext>({
  page: 1,
  setPage: (value) => {},
});

export const MyContextProvider = (props) => {
  const [page, setPage] = React.useState(1);

  return (
    <MyContext.Provider value={{ page, setPage }}>
      {props.children}
    </MyContext.Provider>
  );
};

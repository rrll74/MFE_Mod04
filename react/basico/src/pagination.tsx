import React from "react";
import { MyContextProvider, MyContext } from "./pagination.context";

interface Props {
  page: number;
  totals: number;
}

export const Pagination: React.FC<Props> = (props) => {
  const myContext = React.useContext(MyContext);

  const calcPages = () => {
    const totalPages = totals % 5 === 0 ? totals / 5 : totals / 5 + 1;
    const arrayPages = [];
    for (let index = 1; index <= totalPages; index++) {
      arrayPages.push(index);
    }
    return arrayPages;
  };

  const { page, totals } = props;
  const [pages, setPages] = React.useState<number[]>(calcPages());

  React.useEffect(() => {
    setPages(calcPages());
  }, [myContext.page, totals]);

  return (
    <MyContextProvider>
      <React.Fragment key="pagination">
        <span>Elementos totales: {totals} -- Página: {myContext.page} -- </span>
        {pages.map((nro) => (
          <React.Fragment key={"pag" + nro}>
            {nro === myContext.page ? (
              " " + nro + " "
            ) : (
              <button onClick={(e) => myContext.setPage(nro)}> {nro} </button>
            )}
          </React.Fragment>
        ))}
      </React.Fragment>
    </MyContextProvider>
  );
};

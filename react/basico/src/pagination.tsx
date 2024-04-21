import React from "react";
import { MyContext } from "./pagination.context";

interface Props {
  totals: number;
  onChange: (value) => void;
  totalPages: Array<number>;
  currentPage: number;
}

export const Pagination: React.FC<Props> = (props) => {
  const myContext = React.useContext(MyContext);

  const { totals, onChange, totalPages, currentPage } = props;
  // const [pages, setPages] = React.useState<number[]>(totalPages);

  const onClick = (nro) => {
    myContext.setPage(nro);
    onChange(nro);
  };

  React.useEffect(() => {
    // setPages(totalPages);
    console.log("pagination", myContext.page);
  }, [myContext.page]);

  return (
    <React.Fragment key="pagination">
      <span>
        Elementos totales: {totals} -- {" "}
      </span>
      {totalPages.map((nro) => (
        <React.Fragment key={"pag" + nro}>
          {nro === currentPage ? (
            " " + nro + " "
          ) : (
            <button onClick={(e) => onClick(nro)}> {nro} </button>
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

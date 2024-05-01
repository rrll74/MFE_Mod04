import React from "react";
import { MyContext } from "./pagination.context";
import { Button } from "@mui/material";

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
      <span>Total Elements: {totals} -- Page: </span>
      {totalPages.map((nro) => (
        <React.Fragment key={"pag" + nro}>
          {nro === currentPage ? (
            <Button variant="outlined" style={{ margin: "3px" }}>
              {nro}
            </Button>
          ) : (
            <Button
              variant="contained"
              style={{ margin: "3px" }}
              onClick={(e) => onClick(nro)}
            >
              {nro}
            </Button>
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

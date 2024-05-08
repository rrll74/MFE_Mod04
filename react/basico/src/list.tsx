import React, { MouseEventHandler } from "react";
import { Button, Paper, TableContainer, TextField } from "@mui/material";
import { MyContext, MyContextProvider } from "./pagination.context";
import { TableComponent } from "./table";
import { Pagination } from "./pagination";

export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [filter, setFilter] = React.useState<string>("lemoncode");

  const [pag, setPag] = React.useState<number>(1);

  const myContext = React.useContext(MyContext);

  const rerender = (nro: number) => {
    setPag(nro);
    console.log("list", myContext.page, nro);
  };

  const calcPages = () => {
    const totals = members.length;
    const totalPages = totals % 5 === 0 ? totals / 5 : totals / 5 + 1;
    const arrayPages = [];
    for (let index = 1; index <= totalPages; index++) {
      arrayPages.push(index);
    }
    console.log(arrayPages);
    return arrayPages;
  };

  React.useEffect(() => {
    applyFilter();
    console.log("hay cambio");
  }, [pag]);

  const applyFilter = () => {
    fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => response.json())
      .then((json) => {
        // console.log(typeof json, json);
        json = typeof json === "object" && !json.message ? json : [];
        setPag(pag);
        setMembers(json);
        console.log("recarga");
      })
      .catch(() => {
        setMembers([]);
        // myContext.setPage(myContext.page);
      });
  };

  const handleFilterButton = () => {
    setPag(1);
    myContext.setPage(1);
    applyFilter();
  };

  return (
    <MyContextProvider>
      <TextField
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Button variant="contained" onClick={handleFilterButton}>
        Filtrar por organización
      </Button>
      {members.length !== 0 ? (
        <TableContainer component={Paper}>
          <TableComponent members={members} pag={pag} />
          <Pagination
            totals={members.length}
            onChange={rerender}
            totalPages={calcPages()}
            currentPage={pag}
          />
        </TableContainer>
      ) : (
        <h3>"Organization doesn't exist or has no users."</h3>
      )}
    </MyContextProvider>
  );
};

import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Pagination } from "./pagination";
import { MyContext, MyContextProvider } from "./pagination.context";

interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [filter, setFilter] = React.useState<string>("lemoncode");
  const [pag, setPag] = React.useState<number>(1);

  const myContext = React.useContext(MyContext);

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

  React.useEffect(() => {
    applyFilter();
    console.log("hay cambio");
  }, [pag]);

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

  return (
    <MyContextProvider>
      <React.Fragment>
        <TextField
          variant="outlined"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            setPag(1);
            myContext.setPage(1);
            applyFilter();
          }}
        >
          Filtrar por organización
        </Button>
        {members.length !== 0 ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Avatar</TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {members.map((member, index) =>
                  index < pag * 5 && index >= (pag - 1) * 5 ? (
                    <TableRow key={member.id}>
                      <TableCell>
                        <img src={member.avatar_url} />
                      </TableCell>
                      <TableCell>
                        <span>{member.id}</span>
                      </TableCell>
                      <TableCell>
                        <Link to={`/detail/${member.login}`}>
                          {member.login}
                        </Link>
                      </TableCell>
                    </TableRow>
                  ) : (
                    ""
                  )
                )}
              </TableBody>
            </Table>
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
      </React.Fragment>
    </MyContextProvider>
  );
};

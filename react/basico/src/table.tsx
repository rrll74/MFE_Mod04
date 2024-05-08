import React from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { MemberEntity } from "./list";

interface Props {
  members: MemberEntity[];
  pag: number;
}

export const TableComponent: React.FC<Props> = (props) => {
  const { members, pag } = props;

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="table">
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
                    <Link to={`/detail/${member.login}`}>{member.login}</Link>
                  </TableCell>
                </TableRow>
              ) : (
                ""
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

import { RowOrderEntity } from "@/common/order";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

interface Props {
  rows: RowOrderEntity[];
}

export const OrderRowsComponent: React.FC<Props> = (props) => {
  const { rows } = props;
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Válido</TableCell>
          <TableCell>Descripción</TableCell>
          <TableCell>Precio</TableCell>
          <TableCell>Estado</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => {
          return (
            <TableRow key={`line_${index}`}>
              <TableCell>{row.valid}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.state}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

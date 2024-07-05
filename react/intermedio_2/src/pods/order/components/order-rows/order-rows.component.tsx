import { RowOrderEntity } from "@/common/order";
import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

interface Props {
  rows: RowOrderEntity[];
  handleClickDeleteRow: (row: RowOrderEntity) => void;
}

export const OrderRowsComponent: React.FC<Props> = (props) => {
  const { rows, handleClickDeleteRow } = props;
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Válido</TableCell>
          <TableCell>Descripción</TableCell>
          <TableCell>Precio</TableCell>
          <TableCell>Estado</TableCell>
          <TableCell>Opción</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => {
          console.log(row, index);
          return (
            <TableRow key={`line_${index}`}>
              <TableCell>
                <Checkbox disabled checked={row?.valid} />
              </TableCell>
              <TableCell>{row?.description}</TableCell>
              <TableCell>{row?.price}</TableCell>
              <TableCell>{row?.state}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={() => handleClickDeleteRow(row)}
                >
                  Borrar
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

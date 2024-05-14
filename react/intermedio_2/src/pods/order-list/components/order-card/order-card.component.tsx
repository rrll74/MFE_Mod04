import React from "react";
import {
  Button,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { OrderEntity } from "@/common/order";
import { routes } from "@/core";

interface Props {
  order: OrderEntity;
  handleClickEdit: (nro: number) => void;
  handleClickDelete: (nro: number) => void;
}

export const OrderCardComponent: React.FC<Props> = (props) => {
  const { order, handleClickDelete, handleClickEdit } = props;

  return (
    <div className="pet-card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Número: <b>{order.nro}</b>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Proveedor: <b>{order.provider}</b>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          fecha: <b>{order.date}</b>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Importe total: <b>{order.total}</b>
        </Typography>{" "}
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Estado: <b>{order.state}%</b>
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={routes.order(order.nro)}>Editar</Link>
        {/* <Button
          size="small"
          variant="contained"
          onClick={(e) => handleClickEdit(order.nro)}
        >
          Editar
        </Button> */}
        <Button
          size="small"
          variant="contained"
          onClick={(e) => handleClickDelete(order.nro)}
          color="error"
        >
          Borrar
        </Button>
      </CardActions>
    </div>
  );
};

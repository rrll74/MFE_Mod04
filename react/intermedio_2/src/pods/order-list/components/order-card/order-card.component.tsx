import React from "react";
import {
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { OrderEntity } from "@/common/order";

interface Props {
  order: OrderEntity;
  handleClick: (nro: number) => void;
}

export const OrderCardComponent: React.FC<Props> = (props) => {
  const { order, handleClick } = props;

  return (
    <div className="pet-card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Número: {order.nro}
          Proveedor: {order.provider}
          fecha: {order.date}
          Importe total: {order.total}
          Estado: {order.state}%
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={(e) => handleClick(order.nro)}
        >
          Borrar
        </Button>
      </CardActions>
    </div>
  );
};

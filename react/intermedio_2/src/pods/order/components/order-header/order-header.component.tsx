import { OrderEntity } from "@/common/order";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";

interface Props {
  order: OrderEntity;
}

export const OrderHeaderComponent: React.FC<Props> = (props) => {
  const { order } = props;

  console.log(order);

  return (
    <div className="order-header">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="Número"
            variant="outlined"
            defaultValue={order.nro}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={{width: "100%"}}
            label="Proveedor"
            variant="outlined"
            defaultValue={order.provider}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Fecha"
            variant="outlined"
            defaultValue={order.date}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Total"
            variant="outlined"
            defaultValue={order.total}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Estado"
            variant="outlined"
            defaultValue={order.state}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained">Guardar</Button>
        </Grid>
      </Grid>
    </div>
  );
};

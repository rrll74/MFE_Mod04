import React from "react";
import { OrderEntity } from "@/common/order";
import { invert_date } from "@/common/common-functions";
import { Button, Grid, TextField } from "@mui/material";

interface Props {
  order: OrderEntity;
}

export const OrderHeaderComponent: React.FC<Props> = (props) => {
  const { order } = props;
  const [provider, setProvider] = React.useState(order.provider);
  const [date, setDate] = React.useState(order.date);

  React.useEffect(() => {
    console.log(order);
    console.log("provider ", provider);
    setProvider(order.provider);
    setDate(invert_date(order.date));
  }, [order]);

  return (
    <div className="order-header">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="Número"
            variant="outlined"
            value={order.nro}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={{ width: "100%" }}
            label="Proveedor"
            variant="outlined"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Fecha"
            variant="outlined"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Total"
            variant="outlined"
            value={order.total}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Estado"
            variant="outlined"
            value={order.state}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained">Guardar</Button>
        </Grid>
      </Grid>
    </div>
  );
};

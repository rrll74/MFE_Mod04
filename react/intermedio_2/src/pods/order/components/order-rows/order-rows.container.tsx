import React from "react";
import { OrderRowsComponent } from "./order-rows.component";
import { OrderEntity } from "@/common/order";

interface Props {
  order: OrderEntity;
}

export const OrderRowsContainer: React.FC<Props> = (props) => {
  const { order } = props;
  return (
    <React.Fragment>
      <OrderRowsComponent rows={order.orders} />
    </React.Fragment>
  );
};

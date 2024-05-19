import React from "react";
import { OrderHeaderComponent } from "./order-header.component";
import { OrderEntity } from "@/common/order";

interface Props {
  order: OrderEntity;
}

export const OrderHeaderContainer: React.FC<Props> = (props) => {
  const { order } = props;

  return (
    <React.Fragment>
      <OrderHeaderComponent order={order} />
    </React.Fragment>
  );
};

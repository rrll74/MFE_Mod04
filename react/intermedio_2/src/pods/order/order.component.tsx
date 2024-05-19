import React from "react";
import { OrderEntity } from "@/common/order";
import { OrderBodyLayout, OrderHeaderLayout } from "@/layouts";
import { OrderHeaderContainer } from "./components/order-header";
import { OrderRowsContainer } from "./components/order-rows";

interface Props {
  order: OrderEntity;
}

export const OrderComponent: React.FC<Props> = (props) => {
  const { order } = props;

  return (
    <React.Fragment>
      <OrderHeaderContainer order={order} />
      <OrderRowsContainer order={order} />
    </React.Fragment>
  );
};

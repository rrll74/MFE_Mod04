import React from "react";
import { OrderCardContainer } from "./components/order-card";
import { OrderEntity } from "@/common/order";

interface Props {
  orderList: OrderEntity[];
}

export const OrderListComponent: React.FC<Props> = (props) => {
  const { orderList } = props;

  return (
    <React.Fragment>
      {orderList.map((order) => (
        <React.Fragment key={order.nro}>
          <OrderCardContainer order={order} key={`order${order.nro}`} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

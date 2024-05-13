import React from "react";
import { OrderCardComponent } from "./order-card.component";
import { OrderEntity } from "@/common/order";
import { OrderListContext } from "@/common/order-list";

interface Props {
  order: OrderEntity;
}

export const OrderCardContainer: React.FC<Props> = (props) => {
  const { order } = props;

  const { orderList, setOrderListProfile } = React.useContext(OrderListContext);

  const handleDeleteAction = (nro: number) => {
    // Delete order from list
    const newList: OrderEntity[] = [];

    orderList.map((order) => {
      if (order.nro !== nro) {
        newList.push(order);
      }
    });
    setOrderListProfile({ orderList: newList });
  };

  return <OrderCardComponent order={order} handleClick={handleDeleteAction} />;
};

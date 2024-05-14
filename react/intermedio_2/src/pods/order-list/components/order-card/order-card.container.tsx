import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/core";
import { OrderEntity } from "@/common/order";
import { OrderListContext } from "@/common/order-list";
import { OrderCardComponent } from "./order-card.component";

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

  const handleEditAction = (nro: number) => {
    const navigate = useNavigate();
    navigate(routes.order(nro));
  };

  return (
    <OrderCardComponent
      order={order}
      handleClickDelete={handleDeleteAction}
      handleClickEdit={handleEditAction}
    />
  );
};

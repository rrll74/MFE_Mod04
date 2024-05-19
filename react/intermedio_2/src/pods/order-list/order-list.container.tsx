import React from "react";
import { OrderListComponent } from "./order-list.component";
import { OrderListContext } from "@/common/order-list";
import { getOrderCollection } from "../../common/order-list/order-list.api";
import { mapOrderCollectionFromApiToVm } from "../../common/order-list/order-list.mapper";
import { useNavigate } from "react-router-dom";
import { OrderEntity } from "@/common/order";

export const OrderListContainer: React.FC = () => {
  const { orderList, setOrderListProfile } = React.useContext(OrderListContext);
  const navigate = useNavigate();

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
    navigate(`/order/${nro}`);
  };

  return (
    <div className="layout-main-list">
      <OrderListComponent
        orderList={orderList}
        handleEditAction={handleEditAction}
        handleDeleteAction={handleDeleteAction}
      />
    </div>
  );
};

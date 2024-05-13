import React from "react";
import { OrderListComponent } from "./order-list.component";
import { OrderListContext } from "@/common/order-list";

export const OrderListContainer: React.FC = () => {
  const { orderList } = React.useContext(OrderListContext);

  return (
    <div className="layout-main-list">
      <OrderListComponent orderList={orderList} />
    </div>
  );
};

import React from "react";
import { OrderListComponent } from "./order-list.component";
import { OrderListContext } from "@/common/order-list";
import { getOrderCollection } from "./order-list.api";
import { OrderEntity } from "@/common/order";
import { mapOrderCollectionFromApiToVm } from "./order-list.mapper";

export const OrderListContainer: React.FC = () => {
  const { orderList, setOrderListProfile } = React.useContext(OrderListContext);

  React.useEffect(() => {
    const data: OrderEntity[] = mapOrderCollectionFromApiToVm(
      getOrderCollection()
    );
    setOrderListProfile({ orderList: data });
  }, []);

  return (
    <div className="layout-main-list">
      <OrderListComponent orderList={orderList} />
    </div>
  );
};

import React from "react";
import { OrderComponent } from "./order.component";
import { OrderListContext } from "@/common/order-list";
import {
  createEmptyOrderEntity,
  findOrderByNro,
  OrderEntity,
  RowOrderEntity,
} from "@/common/order";

interface Props {
  nro: number;
}

export const OrderContainer: React.FC<Props> = (props) => {
  const { nro } = props;
  const orderListProvider = React.useContext(OrderListContext);
  const [order, setOrder] = React.useState<OrderEntity>();

  React.useEffect(() => {
    const editionOrder = findOrderByNro(nro, orderListProvider.orderList);
    // console.log(nro, orderListProvider, editionOrder);
    setOrder(editionOrder);
  }, [order]);

  const handleClickDeleteRow = (row: RowOrderEntity) => {
    const newOrders = order.orders.map((current) =>
      current.description !== row.description ? current : null
    );
    console.log(newOrders);
    setOrder({ ...order, orders: newOrders });
  };

  return (
    <OrderComponent
      order={order || createEmptyOrderEntity()}
      handleClickDeleteRow={handleClickDeleteRow}
    />
  );
};

import React from "react";
import { OrderEntity, RowOrderEntity } from "@/common/order";
import { OrderBodyLayout, OrderHeaderLayout } from "@/layouts";
import { OrderHeaderContainer } from "./components/order-header";
import { OrderRowsContainer } from "./components/order-rows";

interface Props {
  order: OrderEntity;
  handleClickDeleteRow: (row: RowOrderEntity) => void;
}

export const OrderComponent: React.FC<Props> = (props) => {
  const { order, handleClickDeleteRow } = props;

  return (
    <React.Fragment>
      <OrderHeaderContainer order={order} />
      <OrderRowsContainer order={order} handleClickDeleteRow={handleClickDeleteRow} />
    </React.Fragment>
  );
};

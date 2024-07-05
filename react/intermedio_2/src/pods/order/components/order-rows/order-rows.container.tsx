import React from "react";
import { OrderRowsComponent } from "./order-rows.component";
import { OrderEntity, RowOrderEntity } from "@/common/order";

interface Props {
  order: OrderEntity;
  handleClickDeleteRow: (row: RowOrderEntity) => void;
}

export const OrderRowsContainer: React.FC<Props> = (props) => {
  const { order, handleClickDeleteRow } = props;
  return (
    <React.Fragment>
      <OrderRowsComponent
        rows={order.orders}
        handleClickDeleteRow={handleClickDeleteRow}
      />
    </React.Fragment>
  );
};

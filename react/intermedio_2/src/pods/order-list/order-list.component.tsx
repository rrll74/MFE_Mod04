import React from "react";
import { OrderListRowContainer } from "./components/order-list-row";
import { OrderEntity } from "@/common/order";
import { OrderListHeaderContainer } from "./components/order-list-header";
import { Table, TableBody } from "@mui/material";

interface Props {
  orderList: OrderEntity[];
  handleEditAction: (nro: number) => void;
  handleDeleteAction: (nro: number) => void;
}

export const OrderListComponent: React.FC<Props> = (props) => {
  const { orderList, handleDeleteAction, handleEditAction } = props;

  return (
    <Table>
      <OrderListHeaderContainer
        headers={["Número", "Proveedor", "Fecha", "Total", "Estado", "", ""]}
      />
      <TableBody>
        {orderList.map((order) => (
          <OrderListRowContainer
            key={`order${order.nro}`}
            order={order}
            handleDeleteAction={handleDeleteAction}
            handleEditAction={handleEditAction}
          />
        ))}
      </TableBody>
    </Table>
  );
};

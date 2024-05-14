import React from "react";
import { OrderContext } from "@/common/order";
import { CartCardContainer } from "./components/cart-card";
import { OrderBodyLayout, OrderHeaderLayout } from "@/layouts";
import { OrderHeaderContainer } from "./components/order-header";
import { OrderRowsContainer } from "./components/order-rows";

export const OrderComponent: React.FC = () => {
  const orderProvider = React.useContext(OrderContext);

  return (
    <React.Fragment>
      <OrderHeaderLayout>
        <h1>{orderProvider.nro}</h1>
        <OrderHeaderContainer />
      </OrderHeaderLayout>
      <OrderBodyLayout>
        <OrderRowsContainer />
      </OrderBodyLayout>
    </React.Fragment>
  );
};

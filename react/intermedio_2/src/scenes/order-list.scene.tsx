import React from "react";
import { OrderListProvider } from "@/common/order-list";
import { ActionsLayout, AppLayout, OrderListLayout } from "@/layouts";
import { OrderListContainer } from "@/pods/order-list";

export const MainPage: React.FC = () => {
  return (
    <AppLayout>
      <ActionsLayout> " " {/* <NewOrderContainer /> */}</ActionsLayout>
      <OrderListProvider>
        <OrderListLayout>
          <h1>Order List</h1>
          <OrderListContainer />
        </OrderListLayout>
      </OrderListProvider>
    </AppLayout>
  );
};

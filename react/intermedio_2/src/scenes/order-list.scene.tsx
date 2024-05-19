import React from "react";
import { OrderListProvider } from "@/common/order-list";
import { ActionsLayout, AppLayout } from "@/layouts";
import { OrderListContainer } from "@/pods/order-list";
import { OrderLinksContainer } from "@/pods/links";


export const OrderListScene: React.FC = () => {
  return (
    <OrderListProvider>
      <AppLayout>
        <ActionsLayout>
          <OrderLinksContainer />
        </ActionsLayout>
        <OrderListContainer />
      </AppLayout>
    </OrderListProvider>
  );
};

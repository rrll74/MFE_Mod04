import React from "react";
import { AppLayout } from "@/layouts";
import { ActionsLayout } from "@/layouts/actions.layout";
import { OrderEntity } from "@/common/order";

interface Props {
  order: OrderEntity;
}

export const OrderPage: React.FC<Props> = (props) => {
  const { order } = props;

  return (
    <AppLayout>
      <ActionsLayout>
        <NewRowContainer />
      </ActionsLayout>
      <OrderProvider>
        <OrderHeaderLayout>
          <h1>{title}</h1>
          <OrderHeaderContainer />
        </OrderHeaderLayout>
        <OrderBodyLayout>
          <OrderRowsContainer />
        </OrderBodyLayout>
      </OrderProvider>
    </AppLayout>
  );
};

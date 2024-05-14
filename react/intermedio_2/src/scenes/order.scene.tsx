import React from "react";
import { useParams } from "react-router-dom";
import { findOrderByNro, OrderContext, OrderProvider } from "@/common/order";
import { OrderListContext } from "@/common/order-list";
import { AppLayout, OrderBodyLayout, OrderHeaderLayout } from "@/layouts";
import { ActionsLayout } from "@/layouts/actions.layout";
import { RowOrderLinksContainer } from "@/pods/links";
import { OrderContainer } from "@/pods/order";

export const OrderScene: React.FC = () => {
  const orderProvider = React.useContext(OrderContext);
  const orderListProvider = React.useContext(OrderListContext);
  const { nro } = useParams();
  const nroNumber = parseInt(nro);

  React.useEffect(() => {
    const order = findOrderByNro(nroNumber, orderListProvider.orderList);
    orderProvider.setOrderProfile(order);
  }, []);

  return (
    <AppLayout>
      <OrderProvider>
        <ActionsLayout>
          <RowOrderLinksContainer />
        </ActionsLayout>
        <OrderContainer />
      </OrderProvider>
    </AppLayout>
  );
};

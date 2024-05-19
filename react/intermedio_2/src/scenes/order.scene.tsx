import React from "react";
import { useParams } from "react-router-dom";
import { OrderListProvider } from "@/common/order-list";
import { AppLayout } from "@/layouts";
import { ActionsLayout } from "@/layouts/actions.layout";
import { RowOrderLinksContainer } from "@/pods/links";
import { OrderContainer } from "@/pods/order";

export const OrderScene: React.FC = () => {
  const { nro } = useParams();
  const nroNumber = parseInt(nro);

  return (
    <OrderListProvider>
      <AppLayout>
        <ActionsLayout>
          <RowOrderLinksContainer />
        </ActionsLayout>
        <OrderContainer nro={nroNumber} />
      </AppLayout>
    </OrderListProvider>
  );
};

import React from "react";
import { PetsProvider } from "@/common/pets";
import { CartProvider } from "@/common/cart";
import { AppLayout, CartLayout, MainLayout } from "@/layouts";
import { LinksContainer } from "@/pods/links";
import { PetListContainer, PetType } from "@/pods/pet-list";
import { CartListContainer } from "@/pods/cart-list";
import { ActionsLayout } from "@/layouts/actions.layout";

interface Props {
  title: string;
  type: PetType;
}

export const MainPage: React.FC<Props> = (props) => {
  const { title, type } = props;

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

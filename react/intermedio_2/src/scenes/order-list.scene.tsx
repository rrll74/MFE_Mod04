import React from "react";
import { PetsProvider } from "@/common/pets";
import { CartProvider } from "@/common/cart";
import { AppLayout, CartLayout, MainLayout } from "@/layouts";
import { LinksContainer } from "@/pods/links";
import { PetListContainer, PetType } from "@/pods/pet-list";
import { CartListContainer } from "@/pods/cart-list";

export const MainPage: React.FC = () => {
  return (
    <AppLayout>
      <ActionsLayout>
        <NewOrderContainer />
      </ActionsLayout>
      <OrderListProvider>
        <OrderListLayout>
          <h1>Order List</h1>
          <OrderListContainer />
        </OrderListLayout>
      </OrderListProvider>
    </AppLayout>
  );
};

import React from "react";
import { AppLayout, CartLayout, MainLayout } from "@/layouts";
import { LinksContainer } from "@/pods/links";
import { PetListContainer, PetType } from "@/pods/pet-list";
import { CartListContainer } from "@/pods/cart-list";

interface Props {
  title: string;
  type: PetType;
}

export const MainPage: React.FC<Props> = (props) => {
  const { title, type } = props;

  return (
    <AppLayout>
      <LinksContainer />
      <MainLayout>
        <h1>{title}</h1>
        <PetListContainer petType={type} />
      </MainLayout>
      <CartLayout><CartListContainer /></CartLayout>
    </AppLayout>
  );
};

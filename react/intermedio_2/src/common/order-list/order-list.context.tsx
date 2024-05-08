import React from "react";
import {
  createEmptyOrderListProfile,
  OrderListProfile,
} from "./order-list.viewmodel";

interface Context extends OrderListProfile {
  setOrderListProfile: (orderListProfile: OrderListProfile) => void;
}

export const PetsContext = React.createContext<Context>({
  orderList: [],
  setOrderListProfile: () =>
    console.warn(
      "** If you are reading this, likely you have forgotten to add the provider on top of your app"
    ),
});

interface Props {
  children: React.ReactNode;
}

export const OrderListProvider: React.FC<Props> = ({ children }) => {
  const [orderListProfile, setOrderListProfile] =
    React.useState<OrderListProfile>(createEmptyOrderListProfile());

  return (
    <PetsContext.Provider
      value={{ orderList: orderListProfile.orderList, setOrderListProfile }}
    >
      {children}
    </PetsContext.Provider>
  );
};

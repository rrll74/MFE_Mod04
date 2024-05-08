import React from "react";

interface Props {
  children: React.ReactNode;
}

export const OrderHeaderLayout: React.FC<Props> = ({ children }) => (
  <div className="layout-order-header">
    <h1>Order</h1>
    {children}
  </div>
);

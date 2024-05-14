import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/core";

export const OrderLinksComponent: React.FC = () => {
  return (
    <div className="links">
      <Link to={routes.order(0)}>Nuevo Pedido</Link>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/core";

export const RowOrderLinksComponent: React.FC = () => {
  return (
    <div className="links">
      <Link to={routes.roworder(0)}>Nueva línea</Link>
      <Link to={routes.list}>Lista de Pedidos</Link>
    </div>
  );
};

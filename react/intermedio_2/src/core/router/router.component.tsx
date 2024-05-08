import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<OrderList />} />
        <Route path={switchRoutes.list} element={<OrderList />} />
        <Route path={switchRoutes.order} element={<Order />} />
      </Routes>
    </Router>
  );
};

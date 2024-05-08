import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { MainPage } from "@/scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={switchRoutes.root}
          element={<MainPage title="Kitty List" type="cats" />}
        />
        <Route
          path={switchRoutes.kitties}
          element={<MainPage title="Kitty List" type="cats" />}
        />
        <Route
          path={switchRoutes.puppies}
          element={<MainPage title="Dog List" type="dogs" />}
        />
      </Routes>
    </Router>
  );
};

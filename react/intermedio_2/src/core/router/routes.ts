import {} from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  order: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  order: "/order",
};

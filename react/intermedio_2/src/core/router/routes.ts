import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  order: string;
  roworder: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  order: "/order/:nro",
  roworder: "roworder/:line",
};

interface Routes extends Omit<SwitchRoutes, "order" | "roworder"> {
  order: (nro: number) => string;
  roworder: (line: number) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  order: (nro) => generatePath(switchRoutes.order, { nro }),
  roworder: (line) => generatePath(switchRoutes.roworder, { line }),
};

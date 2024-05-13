export type OrderState = "Pendiente" | "Válido";

export interface RowOrderEntity {
  valid: boolean;
  state: OrderState;
  description: string;
  price: number;
}

export interface OrderEntity {
  nro: number;
  provider: string;
  date: string;
  total: number;
  state: number;
  orders: RowOrderEntity[];
}

export const findPetByNro = (nro: number, orders: OrderEntity[]) => {
  let orderFound: OrderEntity = null;

  orders.map((order) => {
    if (order.nro === nro) {
      orderFound = order;
    }
  });
  return orderFound;
};

export const createEmptyOrderEntity = (): OrderEntity => ({
  nro: 0,
  provider: "",
  date: "",
  total: 0,
  state: 0,
  orders: [],
});

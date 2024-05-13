import { OrderEntity } from "@/common/order";

export interface OrderListProfile {
  orderList: OrderEntity[];
}

export const createEmptyOrderListProfile = (): OrderListProfile => ({
  orderList: [],
});

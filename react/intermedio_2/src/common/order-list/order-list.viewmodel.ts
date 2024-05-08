import { OrderProfile } from "@/common/order";

export interface OrderListProfile {
  orderList: OrderProfile[];
}

export const createEmptyOrderListProfile = (): OrderListProfile => ({
  orderList: [],
});

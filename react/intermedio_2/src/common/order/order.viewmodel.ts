interface OrderRowEntity {
  id: number;
  desc: string;
  import: number;
}

interface OrderHeaderEntity {
  id: number;
  number: number;
  provider: string;
  date: string;
  total: number;
  state: number;
}

export interface OrderProfile {
  header: OrderHeaderEntity;
  rows: OrderRowEntity[];
}

export const createEmptyOrderProfile = (): OrderProfile => ({
  header: {
    id: 0,
    number: 0,
    provider: "",
    date: "",
    total: 0,
    state: 0,
  },
  rows: [],
});

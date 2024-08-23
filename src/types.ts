export interface IBooks {
  id?: string;
  title: string;
  prices: {
    final_price: number;
  };
  date_written_at: string;

  rating: {
    rated_avg: number;
  };
}
export interface IRenameKeyBooks {
  id?: string;
  title: string;
  price: number;
  date: string;
  rating: number;
}

export type TBookWrapperProps = {
  books: IRenameKeyBooks[];
};

export type TBookCardProps = IRenameKeyBooks;

export type TSearchProps = {
  store: (val: string) => void;
};

export type TSortProps = {
  store: (sortType: string) => void;
};

export type TWrapperProps = {
  status: "rejected" | "pending" | "fulfilled" | "default";
  children: React.ReactNode;
};

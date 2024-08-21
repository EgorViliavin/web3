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

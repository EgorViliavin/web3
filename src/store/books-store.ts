import { IBooks, IRenameKeyBooks } from "../types";
import { makeAutoObservable } from "mobx";
import { getBooks } from "../api/books-api";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";

class BooksStore {
  books?: IPromiseBasedObservable<IBooks[]>;
  search: string = "";
  sortType: string = "max-rating";

  constructor() {
    makeAutoObservable(this);
  }

  getBooksRequest = () => {
    this.books = fromPromise(getBooks());
  };

  setSearch = (search: string) => {
    this.search = search;
  };

  setSortType = (sortType: string) => {
    this.sortType = sortType;
  };

  getBooks = (): IRenameKeyBooks[] => {
    if (this.books?.state !== "fulfilled") {
      return [];
    }

    const data = this.books.value.map((item) => {
      return {
        id: item.id,
        date: item.date_written_at,
        price: item.prices.final_price,
        rating: item.rating.rated_avg,
        title: item.title,
      };
    });

    const filtered = this.search
      ? data.filter((book) =>
          book.title.toLowerCase().includes(this.search.toLowerCase())
        )
      : data;

    return filtered.sort((a, b): number => {
      switch (this.sortType) {
        case "max-rating":
          return b.rating - a.rating;
        case "min-rating":
          return a.rating - b.rating;
        case "price":
          return b.price - a.price;
        case "date":
          return new Date(b.date).getTime() - new Date(a.date).getTime();

        default:
          return 0;
      }
    });
  };
}

export default new BooksStore();

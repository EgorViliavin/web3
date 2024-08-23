import { IBooks, IRenameKeyBooks } from "../types";
import { makeAutoObservable } from "mobx";
import { getBooks } from "../api/books-api";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import renameKey from "../util/renameKey";

class BooksStore {
  books?: IPromiseBasedObservable<IBooks[]>;
  search: string = "";
  sortType: string = "max-rating";

  constructor() {
    makeAutoObservable(this);
  }
  /**
   * Оборачивает Promise (HTTP-запрос) в реактивное свойство
   * Это удобно для отслеживания состояний выполнения (pending, fulfilled, rejected) и управления логикой отображения этих состояний в компонентах.
   */
  getBooksRequest = () => {
    this.books = fromPromise(getBooks());
  };

  /**
   *
   * @param search принимает значение input в компоненте Search
   */
  setSearch = (search: string) => {
    this.search = search;
  };

  /**
   *
   * @param sortType принимает значение type (тип сортировки) в компоненте Sort
   */
  setSortType = (sortType: string) => {
    this.sortType = sortType;
  };

  /**
   *
   * @param id принимает id книги c помощью useRoute
   * @returns найденную книгу по id, соответственно если такой книги нет, то null.
   * Страница book-page
   */
  getBookId(id: string): IRenameKeyBooks | null {
    if (this.books?.state !== "fulfilled") {
      return null;
    }

    const data = renameKey(this.books.value).find((item) => item.id == id);

    return data ?? null;
  }

  /**
   *
   * @returns отсортированные книги сразу с новыми ключами для фронта
   */
  getBooks = (): IRenameKeyBooks[] => {
    if (this.books?.state !== "fulfilled") {
      return [];
    }

    const data = renameKey(this.books.value);

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

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import BooksStore from "./store/books-store";
import Search from "./components/Search";
import Sort from "./components/Sort";
import BookWrapper from "./components/BookWrapper";

const App = observer(() => {
  useEffect(() => {
    BooksStore.getBooksRequest();
  }, []);

  if (!BooksStore.books) {
    return (
      <div className="container mx-auto w-full flex items-center justify-center">
        <p>Загрузка...</p>
      </div>
    );
  }

  if (BooksStore.books.state === "pending") {
    return (
      <div className="container mx-auto w-full flex items-center justify-center">
        <p>Ожидание...</p>
      </div>
    );
  }

  if (BooksStore.books.state === "rejected") {
    return (
      <div className="container mx-auto w-full flex items-center justify-center">
        <p>Ошибка загрузки на сервере...</p>
      </div>
    );
  }

  const books = BooksStore.getBooks();

  return (
    <div className="App">
      <div className="container mx-auto w-full">
        <Search store={BooksStore.setSearch} />

        <div>
          <h2 className="text-3xl text-center my-5">Книги</h2>
          <Sort store={BooksStore.setSortType} />
          <BookWrapper filtered={books} />
        </div>
      </div>
    </div>
  );
});

export default App;

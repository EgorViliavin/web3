import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import booksStore from "../store/books-store";
import Search from "../components/Search";
import Sort from "../components/Sort";
import BooksWrapper from "../components/BooksWrapper";
import Wrapper from "../components/Wrapper";

const HomePage = observer(() => {
  useEffect(() => {
    booksStore.getBooksRequest();
  }, []);

  const state = booksStore.books?.state || "default";

  const books = booksStore.getBooks();

  return (
    <div className="home">
      <Wrapper status={state}>
        <Search store={booksStore.setSearch} />
        <Sort store={booksStore.setSortType} />

        <BooksWrapper books={books} />
      </Wrapper>
    </div>
  );
});

export default HomePage;

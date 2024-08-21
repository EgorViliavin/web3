import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import BooksStore from "./store/books-store";
import Search from "./components/Search";
import Sort from "./components/Sort";
import BookWrapper from "./components/BookWrapper";
import Wrapper from "./components/Wrapper";
import { messages } from "./const";

const App = observer(() => {
  useEffect(() => {
    BooksStore.getBooksRequest();
  }, []);

  const state = BooksStore.books?.state || "default";

  const books = BooksStore.getBooks();

  return (
    <div className="App">
      <Wrapper>
        <Search store={BooksStore.setSearch} />
        <Sort store={BooksStore.setSortType} />
        {messages[state]}
        <BookWrapper filtered={books} />
      </Wrapper>
    </div>
  );
});

export default App;

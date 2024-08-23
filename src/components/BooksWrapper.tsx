import { TBookWrapperProps } from "../types";
import BookCard from "./BookCard";

const noBooksElement = (): JSX.Element => {
  return <p className="mt-40 text-5xl">По вашему запросу ничего не найдено</p>;
};
const BookWrapper = ({ books }: TBookWrapperProps): JSX.Element => {
  return (
    <ul className="flex flex-col items-center px-10 md:px-0 md:flex-row md:flex-wrap gap-10 md:justify-center pb-10">
      {books.length <= 0
        ? noBooksElement()
        : books.map((book) => (
            <li key={book.id}>
              <BookCard
                title={book.title}
                price={book.price}
                date={book.date}
                rating={book.rating}
                id={book.id}
              />
            </li>
          ))}
    </ul>
  );
};

export default BookWrapper;

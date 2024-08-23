import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import booksStore from "../store/books-store";
import { Path } from "../routes";
import { useWeb3Modal } from "@web3modal/ethers/react";

const BookPage = observer(() => {
  const { id } = useParams<string>();
  /** Для покупки уже нужно писать бек))) */
  const { open } = useWeb3Modal();
  if (!id) {
    return null;
  }

  const book = booksStore.getBookId(id);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <article className="flex flex-col items-center border p-20 rounded-3xl">
        <h2>{book?.title}</h2>
        <p>{book?.price} &#8381;</p>
        <button onClick={() => open()}>Купить книгу</button>
        <Link to={Path.HOME} className="mt-10 font-bold uppercase">
          Домой
        </Link>
      </article>
    </div>
  );
});

export default BookPage;

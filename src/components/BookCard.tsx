import { IRenameKeyBooks } from "../types";

type BookCardProps = IRenameKeyBooks;

const BookCard = ({
  title,
  price,
  date,
  rating,
}: BookCardProps): JSX.Element => {
  return (
    <div className="block rounded-lg w-60  md:w-72  shadow-2xl">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img
          className="rounded-lg  sm:m-h-64 md:h-64 w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfrkMbcX5-Z2MkrbDu0v1BxPpB3oLnN1s7TQ&s"
          alt=""
        />
      </div>

      <div className="p-2">
        <div className="flex justify-between">
          <h5 className="mb-2 text-sm leading-tight ">Название книги</h5>
          <h5 className="mb-2 text-sm font-bold leading-tight flex text-orange-400">
            {rating}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </h5>
        </div>
        <p className="mb-1 text-sm  font-bold ">{title}</p>

        <p className="mb-4 text-base ">Дата добавления:{date}</p>
        <h5 className="mb-2 text-sm font-bold leading-tight">{price} РУБ</h5>
      </div>
    </div>
  );
};

export default BookCard;

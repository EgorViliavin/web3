import { SORT_TYPES } from "../const";

type SortProps = {
  store: (sortType: string) => void;
};

const Sort = (props: SortProps): JSX.Element => {
  const handleSortChange = (sortType: string) => {
    props.store(sortType);
  };
  return (
    <div className="w-full mx-auto flex  gap-5 mb-5">
      {SORT_TYPES.map((item, index) => {
        return (
          <button
            /** Знаю что index нельзя прокидывать))) */
            key={index}
            onClick={() => handleSortChange(item.type)}
            className=" text-xs md:text-lg  border px-2 rounded-2xl"
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};

export default Sort;

import { SORT_TYPES } from "../const";
import { TSortProps } from "../types";

const Sort = ({ store }: TSortProps): JSX.Element => {
  const handleSortChange = (sortType: string) => {
    store(sortType);
  };
  return (
    <div className="w-full mx-auto flex gap-5 mb-5">
      {SORT_TYPES.map((item, index) => {
        return (
          <button
            /** Знаю что index нельзя прокидывать))) */
            key={index}
            onClick={() => handleSortChange(item.type)}
            className="text-xs md:text-lg border px-2 rounded-2xl"
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};

export default Sort;

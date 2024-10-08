import { TSearchProps } from "../types";
import ConnectToWallet from "./ConnectToWallet";

const Search = ({ store }: TSearchProps): JSX.Element => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store(e.target.value);
  };
  return (
    <div className="rounded flex gap-10 bg-white my-5">
      <input
        className="w-full rounded-3xl bg-transparent px-4 py-1 text-gray-400 outline-none border border-slate-700 focus:outline-none"
        placeholder="Поиск..."
        onChange={handleSearchChange}
      />
      <ConnectToWallet />
    </div>
  );
};
export default Search;

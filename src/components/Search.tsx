import ConnectToWallet from "./ConnectToWallet";

type SearchProps = {
  store: (val: string) => void;
};

const Search = (props: SearchProps): JSX.Element => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.store(e.target.value);
  };
  return (
    <div className="rounded flex gap-10 bg-white mt-10">
      <input
        className="w-full rounded-3xl bg-transparent px-4 py-1 text-gray-400 outline-none border border-slate-700 focus:outline-none"
        placeholder="Поиск"
        onChange={handleSearchChange}
      />
      <ConnectToWallet />
    </div>
  );
};
export default Search;

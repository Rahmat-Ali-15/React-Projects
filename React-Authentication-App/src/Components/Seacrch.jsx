
import { IoMdSearch } from "react-icons/io"

export const Search = () => {
  return (
    <>
      <div className="search-bar bg-transparent flex items-center gap-2.5 py-1.75 px-5 border-2 border-[rgba(255,255,255,0.5)] rounded-[5px] cursor-pointer hover:border-white">
        <IoMdSearch className="text-white text-[25px] font-semibold" />
        <p className="text-white font-500">SEARCH</p>
      </div>
    </>
  );
};

import "./SearchBar.css";
import { CiSearch } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";

export default function SearchBar({
  search,
  setSearch,
  setSearchValue,
  setSelectedCategory,
  setCurrentPage,
  focusSearch,
}) {
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (focusSearch) {
      searchInputRef.current?.focus();
    }
  }, [focusSearch]);

  return (
    <div className="search-bar py-3 ">
      <div className="container text-center">
        <div className="row d-flex justify-content-center g-1">
          <div className="col-6">
            <CiSearch className="icon" />
            <input
              ref={searchInputRef}
              type="search"
              className="w-100 p-1 ps-4"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-3">
            <IoLocationSharp className="icon" />
            <input
              type="text"
              className="w-100 p-1 ps-4"
              placeholder="All Cities"
            />
          </div>
          <div className="col-1 d-flex">
            <input
              className="btn p-1 px-2"
              type="submit"
              value="Search"
              onClick={() => {
                setSearchValue(search);
                setSelectedCategory("All Products");
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

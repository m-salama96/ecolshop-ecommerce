import SearchBar from "./SearchBar/SearchBar";
import CategoryName from "./CategoryName/CategoryName";
import Filter from "./Filter/Filter";
import ProductsGrid from "./ProductsGrid/ProductsGrid";
import Pagination from "./Pagination/Pagination";
import { useContext, useState, useMemo, useEffect } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Loading from "../../Components/Loading/Loading";
import { useSearchParams } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";

export default function CategoryProducts() {
  const { products, error, loading } = useContext(ProductContext);

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const searchFromUrl = searchParams.get("search") || "";

  const focusSearch = searchParams.get("focus") === "true";

  // search Ber

  const [search, setSearch] = useState(searchFromUrl);

  const [searchValue, setSearchValue] = useState(searchFromUrl);

  // CategoryName
  const [selectedCategory, setSelectedCategory] = useState(
    category || "All Products",
  );

  // pagination

  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedCategory(category || "All Products");
  }, [category]);

  // price filter

  const [priceRange, setPriceRange] = useState("all");

  // rating filter

  const [selectedRating, setSelectedRating] = useState("all");

  //brand filter

  const [brandFilter, setBrandFilter] = useState("all");

  // shuffledProducts

  const shuffledProducts = useMemo(
    // eslint-disable-next-line react-hooks/purity
    () => [...products].sort(() => Math.random() - 0.5),
    [products],
  );

  const searchFilteredProducts = shuffledProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.category.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const filteredList =
    selectedCategory === "All Products"
      ? searchFilteredProducts
      : searchFilteredProducts.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  const priceFilteredProducts = filteredList.filter((product) => {
    if (priceRange === "all") return true;

    if (priceRange === "under50") return product.price < 50;

    if (priceRange === "50-100")
      return product.price >= 50 && product.price <= 100;

    if (priceRange === "100-500")
      return product.price >= 100 && product.price <= 500;

    if (priceRange === "500-1000")
      return product.price >= 500 && product.price <= 1000;

    if (priceRange === "over1000") return product.price > 1000;

    return true;
  });

  const ratingFilteredProducts = priceFilteredProducts.filter((product) => {
    if (selectedRating === "all") return true;

    return product.rating >= Number(selectedRating);
  });

  const filterByBrand = ratingFilteredProducts.filter((product) => {
    if (brandFilter === "all") return true;

    return product.brand === brandFilter;
  });

  // pagination

  const productsPerPage = 12;

  const startIndex = (currentPage - 1) * productsPerPage;

  const endIndex = startIndex + productsPerPage;

  const currentProducts = filterByBrand.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filterByBrand.length / productsPerPage);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <h2 style={{ minHeight: "88vh" }} className=" text-center py-5">
        Product not found
      </h2>
    );
  }

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setSearchValue={setSearchValue}
        setSelectedCategory={setSelectedCategory}
        setCurrentPage={setCurrentPage}
        focusSearch={focusSearch}
      />
      {/* Categories - Mobile */}
      <div className="d-lg-none">
        <div className="container py-2">
          <button
            className="btn btn-dark w-100 text-start"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#categoriesCollapse"
            aria-expanded="false"
            aria-controls="categoriesCollapse"
          >
            <div className="row">
              <div className="col">Categories</div>
              <div className="col text-end">
                <IoChevronDown />
              </div>
            </div>
          </button>

          <div className="collapse" id="categoriesCollapse">
            <CategoryName
              setSelectedCategory={setSelectedCategory}
              setSearchValue={setSearchValue}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {/* Categories - Desktop */}
      <div className="d-none d-lg-block ">
        <CategoryName
          setSelectedCategory={setSelectedCategory}
          setSearchValue={setSearchValue}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {/* Filters - Mobile */}
      <div className="d-lg-none ">
        <div className="container py-2 ">
          <button
            className="btn btn-dark w-100 text-start"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#filtersCollapse"
            aria-expanded="false"
            aria-controls="filtersCollapse"
          >
            <div className="row">
              <div className="col">Filters</div>
              <div className="col text-end">
                <IoChevronDown />
              </div>
            </div>
          </button>

          <div className="collapse" id="filtersCollapse">
            <Filter
              setSearchValue={setSearchValue}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
              setSelectedPrice={setPriceRange}
              priceRange={priceRange}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
              brandFilter={brandFilter}
              setBrandFilter={setBrandFilter}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {/* Filters - Desktop */}
      <div className="d-none d-lg-block">
        <Filter
          setSearchValue={setSearchValue}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          setSelectedPrice={setPriceRange}
          priceRange={priceRange}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          brandFilter={brandFilter}
          setBrandFilter={setBrandFilter}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {filterByBrand.length === 0 ? (
        <h2 style={{ minHeight: "60vh" }} className="text-center py-5">
          Product not found
        </h2>
      ) : (
        <>
          <ProductsGrid products={currentProducts} />

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </>
  );
}

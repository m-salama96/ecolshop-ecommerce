import SearchBar from "./SearchBar/SearchBar";
import CategoryName from "./CategoryName/CategoryName";
import Filter from "./Filter/Filter";
import ProductsGrid from "./ProductsGrid/ProductsGrid";
import Pagination from "./Pagination/Pagination";
import { useContext, useState, useMemo, useEffect } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Loading from "../../Components/Loading/Loading";
import { useSearchParams } from "react-router-dom";

export default function CategoryProducts() {
  const { products, error, loading } = useContext(ProductContext);

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const focusSearch = searchParams.get("search") === "true";

  // search Ber

  const [search, setSearch] = useState("");

  const [searchValue, setSearchValue] = useState("");

  // CategoryName
  const [selectedCategory, setSelectedCategory] = useState(
    category || "All Products",
  );

  // pagination
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedCategory(category || "All Products");
    setCurrentPage(1);
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
    return <h2 className="text-center">Product not found</h2>;
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
      <CategoryName
        setSelectedCategory={setSelectedCategory}
        setSearchValue={setSearchValue}
        setCurrentPage={setCurrentPage}
      />

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

      <ProductsGrid products={currentProducts} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
}

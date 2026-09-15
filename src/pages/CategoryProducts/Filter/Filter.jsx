import "./Filter.css";

function Filter({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setSelectedPrice,
  setSearchValue,
  selectedRating,
  setSelectedRating,
  setBrandFilter,
  brandFilter,
  setCurrentPage,
}) {
  return (
    <div className="filter py-2 ">
      <div className="container text-center p-2">
        <div className="row g-1">
          {/* Categories */}
          <div className="col-12 col-lg-2">
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSearchValue("");
                setCurrentPage(1);
              }}
            >
              <option value={"All Products"}>Categories</option>
              <option value="beauty">Beauty</option>
              <option value="fragrances">Fragrances</option>
              <option value="furniture">Furniture</option>
              <option value="groceries">Groceries</option>
              <option value="laptops">Laptops</option>
              <option value="mens-shirts">Mens Shirts</option>
              <option value="mens-shoes">Mens Shoes</option>
              <option value="mens-watches">Mens Watches</option>
              <option value="mobile-accessories">Mobile Accessories</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="skin-care">Skin Care</option>
              <option value="smartphones">Smartphones</option>
              <option value="sports-accessories">Sports Accessories</option>
              <option value="sunglasses">Sunglasses</option>
              <option value="tablets">Tablets</option>
              <option value="tops">Tops</option>
              <option value="vehicle">Vehicle</option>
              <option value="womens-bags">Womens Bags</option>
              <option value="womens-dresses">Womens Dresses</option>
              <option value="womens-jewellery">Womens Jewellery</option>
              <option value="womens-shoes">Womens Shoes</option>
              <option value="womens-watches">Womens Watches</option>
            </select>
          </div>

          {/* Price */}
          <div className="col-12 col-lg">
            <select
              className="form-select"
              value={priceRange}
              onChange={(e) => {
                setSelectedPrice(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="all">Price</option>
              <option value="under50">Under $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-500">$100 - $500</option>
              <option value="500-1000">$500 - $1000</option>
              <option value="over1000">Over $1000</option>
            </select>
          </div>

          {/* Rating */}
          <div className="col-12 col-lg">
            <select
              className="form-select"
              value={selectedRating}
              onChange={(e) => {
                setSelectedRating(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="all">Rating</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars & Up</option>
              <option value="3">3 Stars & Up</option>
              <option value="2">2 Stars & Up</option>
            </select>
          </div>

          {/* Stock */}
          <div className="col-12 col-lg">
            <select className="form-select">
              <option>Stock</option>
              <option>In Stock</option>
              <option>Out of Stock</option>
            </select>
          </div>

          {/* Brand */}
          <div className="col-12 col-lg">
            <select
              className="form-select"
              value={brandFilter}
              onChange={(e) => {
                setBrandFilter(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value={"all"}>Brand</option>
              <option value={"Apple"}>Apple</option>
              <option value={"Samsung"}>Samsung</option>
              <option value={"OPPO"}>OPPO</option>
              <option value={"Huawei"}>Huawei</option>
              <option value={"Realme"}>Realme</option>
            </select>
          </div>
          <div className="col-12 col-lg-auto">
            <input
              className="btn p-1 px-2"
              type="button"
              value="Clear Filter"
              onClick={() => {
                setSelectedCategory("All Products");
                setSearchValue("");
                setSelectedPrice("all");
                setSelectedRating("all");
                setBrandFilter("all");
                setCurrentPage(1);

                window.location.href = "/shop";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;

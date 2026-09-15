import Hero from "./Hero/Hero";
import Discover from "./Discover/Discover";
import NewArrivals from "./New Arrivals/NewArrivals";
import ShopByCategory from "./Shop By Category/Shop-By-Category";
import BestSellers from "./Best Sellers/BestSellers";
import Hero2 from "./Hero2/Hero2";
import ShopByDepartment from "./Shop By Department/ShopByDepartment";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Loading from "../../Components/Loading/Loading";

function Home() {
  const { error, loading } = useContext(ProductContext);
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
      <Hero />
      <Discover />
      <NewArrivals />
      <ShopByCategory />
      <BestSellers />
      <Hero2 />
      <ShopByDepartment />
    </>
  );
}

export default Home;

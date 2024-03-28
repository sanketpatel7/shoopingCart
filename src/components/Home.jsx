import React from "react";
import { CartState } from "../context/Context";
import Filters from "./Filters";
import Product from "./Product";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return <>
    <div className="home">
        {/* <Filters /> */}
        <div className="productContainer">
            {products.map((e) => {
               return <Product e={e} key={e.id} />
            })}
        </div>
    </div>
  </>;
};

export default Home;

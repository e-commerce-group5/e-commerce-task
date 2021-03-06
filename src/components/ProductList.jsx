import React, { useContext } from "react";
import { ProductsContext } from "../contexts/GlobalContext";
import ProductCard from "./ProductCard";
import WithSpinner from "./withSpinner/WithSpinner";

const ProductList = ({ isLoading }) => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="row">
      {products &&
        Object.entries(products).map((product) => {
          const key = product[1].id;
          const id = product[1].id;
          const name = product[1].name;
          const price = product[1].price;
          const description = product[1].description;
          const imgURL = product[1].images[0].src.small;
          const imgAlt = product[1].images[0].alt;
          return (
            <ProductCard
              key={key}
              id={id}
              name={name}
              price={price}
              description={description}
              imgURL={imgURL}
              imgAlt={imgAlt}></ProductCard>
          );
        })}
    </div>
  );
};

export default WithSpinner(ProductList);
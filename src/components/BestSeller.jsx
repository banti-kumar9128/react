import { useState } from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/appContext";

const BestSeller = ({ selectedCategory }) => {
  const { products } = useAppContext();

  // Filter products by selected category if one is chosen, otherwise show all in-stock products
  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.category === selectedCategory && product.inStock
      )
    : products.filter((product) => product.inStock);

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">
        {selectedCategory ? `${selectedCategory} Products` : "Best Sellers"}
      </p>
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center">
        {filteredProducts
          .slice(0, selectedCategory ? filteredProducts.length : 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;

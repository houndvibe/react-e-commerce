import { useMemo } from "react";
import { productProps } from "../redux/productsSlice";

export const useFilter = (
  allProducts: productProps[],
  category: string,
  sortType: string,
  filterInput: string
) => {
  const currentCategoryProducts = useMemo(() => {
    return allProducts.filter((product) => {
      if (category === "all") {
        return product;
      } else {
        return product.category == category;
      }
    });
  }, [allProducts, category]);

  const filteredProducts = useMemo(() => {
    return currentCategoryProducts.filter((product) =>
      product.title.toLowerCase().includes(filterInput.toLowerCase())
    );
  }, [currentCategoryProducts, filterInput]);

  const filteredAndSortedProducts = useMemo(() => {
    return filteredProducts.sort((a, b) => {
      if (sortType == "price up") {
        return a.price - b.price;
      } else if (sortType == "price down") {
        return b.price - a.price;
      }
    });
  }, [filteredProducts, sortType]);

  return filteredAndSortedProducts;
};

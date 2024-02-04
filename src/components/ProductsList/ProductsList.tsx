import classes from "./ProductsList.module.scss";
import { productProps, selectAllProducts } from "../../redux/productsSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useFilter } from "../../hooks/useFilter";
import FilterPannel from "../FilterPannel/FilterPannel";
import MyPagination from "../UI/MyPagination/MyPagination";

const ProductsList = () => {
  const allProducts = useSelector(selectAllProducts);

  const [category, setCategory] = useState<string>("all");
  const [filterInput, setFilterInput] = useState<string>("");
  const [sortType, setSortType] = useState<string>("");

  const handleChangeCategory = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setCategory(value.value);
  };

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilterInput(e.target.value);
  };

  const handleChangeSort = (value: string): void => {
    setSortType(value);
  };

  const filteredAndSortedProducts: productProps[] = useFilter(
    allProducts,
    category,
    sortType,
    filterInput
  );

  return (
    <div className={classes.productList}>
      <div>
        <div className={classes.pannel}>
          <FilterPannel
            onChangeCategory={handleChangeCategory}
            onChangeFilter={handleChangeFilter}
            onChangeSort={handleChangeSort}
          />
        </div>
        <div>
          <MyPagination products={filteredAndSortedProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

import { Flex, Pagination, Select, Input } from "antd";
import classes from "./ProductsList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { productProps, selectAllProducts } from "../../redux/productsSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProductsList = () => {
  const allProducts = useSelector(selectAllProducts);

  const [category, setCategory] = useState<string>("all");
  const [filterInput, setFilterInput] = useState<string>("");
  const [sortType, setSortType] = useState<string>("");

  const currentCategoryProducts = allProducts.filter(
    (product: productProps) => {
      if (category === "all") {
        return product;
      } else {
        return product.category == category;
      }
    }
  );

  const categories = ["all", "furniture", "smartphones"];

  const handleChangeCategory = (value: {
    value: string;
    label: React.ReactNode;
  }) => {
    setCategory(value.value);
  };

  const handleChangeFilter = (e) => {
    setFilterInput(e.target.value);
  };

  const handleChangeSort = (value) => {
    setSortType(value);
  };

  const filteredProducts = currentCategoryProducts.filter((product) =>
    product.title.toLowerCase().includes(filterInput.toLowerCase())
  );

  const filteredAndSortedProducts = filteredProducts.sort((a, b) => {
    if (sortType == "price up") {
      return a.price - b.price;
    } else if (sortType == "price down") {
      return b.price - a.price;
    }
  });

  return (
    <div className={classes.productList}>
      <div>
        {" "}
        <Flex gap={"large"}>
          <div>
            category{" "}
            <Select
              labelInValue
              defaultValue={{ value: "all", label: "all (100)" }}
              style={{ width: 120 }}
              onChange={handleChangeCategory}
              options={categories.map((item) => {
                return { value: item, label: item + 1 };
              })}
            />
          </div>
          <div>
            <Input placeholder="Basic usage" onChange={handleChangeFilter} />;
          </div>

          <div>
            sort{" "}
            <Select
              defaultValue=""
              style={{ width: 120 }}
              onChange={handleChangeSort}
              options={[
                { value: "price up", label: "price up" },
                { value: "price down", label: "price down" },
              ]}
            />
          </div>
        </Flex>
        <Flex wrap="wrap" gap="large" justify="space-around">
          {filteredAndSortedProducts.map((product: any): any => {
            return <ProductCard {...product} />;
          })}
        </Flex>
        <div>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

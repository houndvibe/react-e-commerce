import { Flex, Pagination } from "antd";
import classes from "./ProductsList.module.scss";
import ProductCard from "../ProductCard/ProductCard";

let cards: any[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

const ProductsList = () => {
  return (
    <div className={classes.productList}>
      <div>
        {" "}
        <Flex wrap="wrap" gap="large" justify="space-around">
          {cards.map((item: any): any => {
            return <ProductCard />;
          })}
        </Flex>
        <div >
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

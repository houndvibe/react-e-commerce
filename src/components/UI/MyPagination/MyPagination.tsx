import { Flex, Pagination } from "antd";
import { Fragment, useState } from "react";
import ProductCard from "../../ProductCard/ProductCard";
import { productProps } from "../../../redux/productsSlice";
import classes from "./MyPagination.module.scss";

interface MyPaginationProps {
  products: productProps[];
}

const MyPagination: React.FC<MyPaginationProps> = ({ products }) => {
  const [page, setPage] = useState<number>(0);

  const handleSetPage = (page: number): void => {
    setPage(page - 1);
  };

  const content = products.map((product: any, index: number): any => {
    if (index > page * 10 && index < page * 10 + 13) {
      return (
        <Fragment key={product.id}>
          <ProductCard {...product} />
        </Fragment>
      );
    } else {
      return null;
    }
  });

  return (
    <div>
      {products.length > 10 ? (
        <>
          <div className={classes.top}>
            <Pagination
              showSizeChanger={false}
              defaultCurrent={1}
              total={100}
              onChange={handleSetPage}
            />
          </div>
          <Flex
            wrap="wrap"
            gap="large"
            justify="space-around"
            className={classes.content}
          >
            {content}
          </Flex>
          <div className={classes.bottom}>
            <Pagination
              showSizeChanger={false}
              defaultCurrent={1}
              total={100}
              onChange={handleSetPage}
            />
          </div>
        </>
      ) : (
        <Flex
          wrap="wrap"
          gap="large"
          justify="space-around"
          className={classes.content}
        >
          {content}
        </Flex>
      )}
    </div>
  );
};

export default MyPagination;

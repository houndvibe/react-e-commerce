import { useSelector } from "react-redux";
import { selectSelectedProduct } from "../../redux/productsSlice";
import classes from "./ProductPage.module.scss";
import { Button, Flex, Input, Typography } from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/cartSlice";
import { useState } from "react";
const { Text } = Typography;

const ProductPage = () => {
  const {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = useSelector(selectSelectedProduct);

  const [count, setCount] = useState<string | number>("1");

  const dispatch = useAppDispatch();

  const handleClickAdd = () => {
    dispatch(addToCart({ id, count }));
  };
  const handleChangeCount = (e) => {
    setCount(e.target.value);
  };

  return (
    <div className={classes.productPage}>
      <Flex gap="middle" vertical justify="center" align="center">
        <Text strong>{title}</Text>
        <img src={thumbnail} alt="" height="400px" width="400px" />
        <Text>{description}</Text>
        <Text delete>{price}$</Text>
        <Text strong>{(price - price / discountPercentage).toFixed(2)}$</Text>
        <br />
        <Text>{stock} in stock</Text>
        <br />
        <Text>rating - {rating}</Text>
        <Flex>
          <Input defaultValue={"1"} onChange={handleChangeCount} />
          <Button onClick={handleClickAdd}>add to cart</Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default ProductPage;

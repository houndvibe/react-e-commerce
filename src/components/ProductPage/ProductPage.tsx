import { useSelector } from "react-redux";
import { selectSelectedProduct } from "../../redux/productsSlice";
import classes from "./ProductPage.module.scss";
import {
  Button,
  Carousel,
  Flex,
  Image,
  InputNumber,
  Rate,
  Typography,
} from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/cartSlice";
import { useState } from "react";
import MyCarousel from "../UI/Carousel/MyCarousel";
import MyInputNumber from "../UI/InputNumber/MyInputNumber";
const { Text, Title } = Typography;

const ProductPage = () => {
  const {
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    title,
  } = useSelector(selectSelectedProduct);

  const [count, setCount] = useState<number>(1);

  const dispatch = useAppDispatch();

  const handleClickAdd = (): void => {
    dispatch(addToCart({ id, count }));
  };
  const handleChangeCount = (value: number): void => {
    setCount(value);
  };

  return (
    <div className={classes.productPage}>
      <div className={classes.title}>
        <Title>{title}</Title>
      </div>
      <div className={classes.carousel}>
        <MyCarousel content={images} />
      </div>
      <div className={classes.description}>
        <Title level={5}>{description}</Title>
      </div>
      <div className={classes.price}>
        <Text strong>Price:</Text>
        <Text delete>{price}$</Text>
        <Text strong>{(price - price / discountPercentage).toFixed(2)}$</Text>
      </div>
      <div className={classes.rating}>
        <Text strong>Rating:</Text>
        <Rate allowHalf defaultValue={rating} />
        <Text>{rating}</Text>
      </div>
      <div className={classes.count}>
        <Text strong>{stock} in stock</Text>
        <MyInputNumber
          min={1}
          max={stock}
          defaultValue={1}
          onChange={handleChangeCount}
          width={70}
        />
        <Button onClick={handleClickAdd}>add to cart</Button>
      </div>
    </div>
  );
};

export default ProductPage;

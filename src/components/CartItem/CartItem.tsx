import { selectAllProducts } from "../../redux/productsSlice";
import { useSelector } from "react-redux";
import { Button, Card, Input, Typography } from "antd";
import { useState } from "react";
import classes from "./CartItem.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { deleteFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const { Text } = Typography;
const CartItem = ({ id, count }) => {
  const products = useSelector(selectAllProducts);
  const {
    brand,
    category,
    description,
    discountPercentage,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = products.find((product) => product.id == id);
  const dispatch = useAppDispatch();
  const [currentCount, setCurrentCount] = useState<number>(count);

  const handleChangeCount = (e) => {
    setCurrentCount(e.target.value);
  };

  const handleDelete = () => {
    dispatch(deleteFromCart(id));
  };

  const totalPrice = price * currentCount;
  const totalDiscountedPrice = (
    (price - price / discountPercentage) *
    currentCount
  ).toFixed(2);

  return (
    <div className={classes.cartItem}>
      <Card
        title={title}
        extra={<Link to={"cart"}>go to cart</Link>}
        cover={<img src={thumbnail} />}
      >
        <p>
          <div>
            count:
            <Input value={currentCount} onChange={handleChangeCount} />
          </div>
          <div>
            {" "}
            price per unit:<Text delete>{price}</Text>
            <Text strong>
              {(price - price / discountPercentage).toFixed(2)}$
            </Text>
          </div>
          <div>
            {" "}
            total:<Text delete>{totalPrice}</Text>
            <Text strong>{totalDiscountedPrice}$</Text>
          </div>
        </p>
        <Button danger onClick={handleDelete}>
          delete
        </Button>
      </Card>
    </div>
  );
};

export default CartItem;

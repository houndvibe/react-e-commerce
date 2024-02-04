import { selectProductById } from "../../redux/productsSlice";
import { useSelector } from "react-redux";
import { Button, Card, Flex, Typography } from "antd";
import classes from "./CartItem.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import {
  changeCountBy,
  deleteFromCart,
  postOrder,
} from "../../redux/cartSlice";
import MyInputNumber from "../UI/InputNumber/MyInputNumber";
import Utilities from "../../services/utilities";
const { Text } = Typography;

export interface cartItem {
  id: number;
  count: number;
}

const CartItem: React.FC<cartItem> = ({ id, count }) => {
  const { discountPercentage, price, stock, thumbnail, title, description } =
    useSelector(selectProductById(id));

  const dispatch = useAppDispatch();

  const handleChangeCount = (value: number): void => {
    dispatch(changeCountBy({ id: id, count: value }));
  };

  const handleDelete = (): void => {
    dispatch(deleteFromCart(id));
  };

  const [totalPrice, totalDiscountedPrice] = Utilities.countPrice(
    price,
    count,
    discountPercentage
  );

  return (
    <div className={classes.cartItem}>
      <div className={classes.image}>
        <img src={thumbnail} width={200} />
      </div>

      <div className={classes.info}>
        <Text strong>{title}</Text>
        <Text className={classes.description}>{description}</Text>
        <div className={classes.order}>
          <Flex gap="small">
            <Text strong delete>
              {totalPrice}$
            </Text>
            <Text strong>{totalDiscountedPrice}$</Text>
          </Flex>
          <Flex gap="small">
            <MyInputNumber
              min={1}
              max={stock}
              value={count}
              onChange={handleChangeCount}
            />
            <Button danger onClick={handleDelete}>
              delete
            </Button>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

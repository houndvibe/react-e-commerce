import { selectProductById } from "../../redux/productsSlice";
import { useSelector } from "react-redux";
import { Button, Card, Typography } from "antd";
import classes from "./SideCartItem.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { changeCountBy, deleteFromCart } from "../../redux/cartSlice";
import MyInputNumber from "../UI/InputNumber/MyInputNumber";
import Utilities from "../../services/utilities";
const { Text } = Typography;

const SideCartItem: React.FC<{ id: number; count: number }> = ({
  id,
  count,
}) => {
  const { discountPercentage, price, stock, thumbnail, title } = useSelector(
    selectProductById(id)
  );

  const dispatch = useAppDispatch();

  const handleChangeCount = (value: number) => {
    dispatch(changeCountBy({ id: id, count: value }));
  };

  const handleDelete = () => {
    dispatch(deleteFromCart(id));
  };

  const [totalPrice, totalDiscountedPrice] = Utilities.countPrice(
    price,
    count,
    discountPercentage
  );

  return (
    <div className={classes.sideCartItem}>
      <Card title={title} cover={<img src={thumbnail} />}>
        <div className={classes.content}>
          <Text strong>{totalDiscountedPrice}$</Text>
          <MyInputNumber
            min={1}
            max={stock}
            value={count}
            onChange={handleChangeCount}
            width={70}
          />
          <Button danger onClick={handleDelete}>
            delete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SideCartItem;

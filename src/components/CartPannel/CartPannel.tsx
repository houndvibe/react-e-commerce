import { Flex, Typography, Button } from "antd";
import classes from "./CartPannel.module.scss";
import { useSelector } from "react-redux";
import {
  deleteFromCart,
  postOrder,
  selectCartProducts,
} from "../../redux/cartSlice";
import { selectAllProducts } from "../../redux/productsSlice";
import Utilities from "../../services/utilities";
import { useAppDispatch } from "../../redux/hooks";

const CartPannel = () => {
  const cartProducts = useSelector(selectCartProducts);
  const allProducts = useSelector(selectAllProducts);

  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    cartProducts.forEach((item) => {
      dispatch(deleteFromCart(item.id));
    });
  };

  const handleOrder = () => {
    dispatch(postOrder(cartProducts));
    handleClearCart();
  };

  const [cartTotalPrice, cartTotalDiscountedPrice] =
    Utilities.countCartTotalPrice(cartProducts, allProducts);

  return (
    <div className={classes.panel}>
      <Flex vertical align="end">
        <Flex>
          <Typography.Text
            strong
          >{`Total ${cartTotalPrice}$ ${cartTotalDiscountedPrice.toFixed(
            2
          )} for ${cartProducts.length} items`}</Typography.Text>{" "}
        </Flex>

        <Flex className={classes.buttons} gap="middle">
          <Button onClick={handleOrder}>order all</Button>
          <Button danger onClick={handleClearCart}>
            clear cart
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default CartPannel;

import { selectCartProducts } from "../../redux/cartSlice";
import { Flex } from "antd";
import CartList from "../../components/CartList/CartList";
import CartPannel from "../../components/CartPannel/CartPannel";
import { useSelector } from "react-redux";
import classes from "./Cart.module.scss";

const Cart: React.FC = () => {
  const cartProducts = useSelector(selectCartProducts);

  return (
    <div className={classes.cart}>
      {cartProducts.length ? (
        <Flex vertical gap={"middle"}>
          <CartList />
          <CartPannel />
        </Flex>
      ) : (
        <div>No products in cart</div>
      )}
    </div>
  );
};

export default Cart;

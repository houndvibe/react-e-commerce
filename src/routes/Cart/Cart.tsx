import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { selectCartProducts } from "../../redux/cartSlice";
import classes from "./Cart.module.scss";
import { Flex } from "antd";

const Cart: React.FC<any> = () => {
  const cartProducts = useSelector(selectCartProducts);

  return (
    <div>
      <Flex className={classes.cartItem}>
        {cartProducts?.map((product: any) => {
          return <CartItem {...product} />;
        }) || <>123</>}
      </Flex>
    </div>
  );
};

export default Cart;

import { Fragment } from "react";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { selectCartProducts } from "../../redux/cartSlice";
import { Flex } from "antd";

const CartList = () => {
  const cartProducts = useSelector(selectCartProducts);
  return (
    <Flex vertical gap="middle">
      {cartProducts?.map((product: any) => {
        return (
          <Fragment key={product.id}>
            <CartItem {...product} />
          </Fragment>
        );
      })}
    </Flex>
  );
};

export default CartList;

import CartItem from "../CartItem/CartItem";
import classes from "./SideCart.module.scss";
const SideCart: React.FC<any> = ({ cartProducts }) => {
  console.log(cartProducts);
  return (
    <div>
      <div className={classes.sideCart}>
        {cartProducts?.map((product: any) => {
          return <CartItem {...product} />;
        }) || <>no products</>}
      </div>
    </div>
  );
};

export default SideCart;

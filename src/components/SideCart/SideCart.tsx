import { Fragment } from "react";
import classes from "./SideCart.module.scss";
import SideCartItem from "../SideCartItem/SideCartItem";

const SideCart: React.FC<any> = ({ cartProducts }) => {
  return (
    <div>
      <div className={classes.sideCart}>
        {cartProducts?.map((product: any) => {
          return (
            <Fragment key={product.id}>
              <SideCartItem {...product} />
            </Fragment>
          );
        }) || <>no products</>}
      </div>
    </div>
  );
};

export default SideCart;

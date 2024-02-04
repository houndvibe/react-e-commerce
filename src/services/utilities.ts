import { productProps } from "../redux/productsSlice";

export default class Utilities {
  static countPrice = (
    price: number,
    count: number,
    discountPercentage: number
  ) => {
    const totalPrice = price * count;
    const totalDiscountedPrice = (
      (price - (price / 100) * discountPercentage) *
      count
    ).toFixed(2);
    return [totalPrice, totalDiscountedPrice];
  };

  static countCartTotalPrice = (
    cartProducts: { id: number; count: number }[],
    allProducts: productProps[]
  ) => {
    const cartProductIds = cartProducts.map((item) => item.id);

    const cartTotalPrice = allProducts.reduce((acc, current) => {
      if (cartProductIds.includes(current.id)) {
        let count = cartProducts.find((item) => item.id == current.id).count;
        return current.price * count + acc;
      } else {
        return acc;
      }
    }, 0);

    const cartTotalDiscountedPrice = allProducts.reduce((acc, current) => {
      if (cartProductIds.includes(current.id)) {
        let count = cartProducts.find((item) => item.id == current.id).count;
        return (
          (current.price - (current.price / 100) * current.discountPercentage) *
            count +
          acc
        );
      } else {
        return acc;
      }
    }, 0);

    return [cartTotalPrice, cartTotalDiscountedPrice];
  };

  static createCategories = (products: productProps[]) => {
    const obj: any = { all: products.length };
    products.forEach((product) => {
      if (obj[product.category]) {
        obj[product.category] += 1;
      } else {
        obj[product.category] = 1;
      }
    });
    return Array.from(Object.entries(obj));
  };
}

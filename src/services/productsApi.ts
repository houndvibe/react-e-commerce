import axios from "axios";

const FETCH_PRODUCTS_URL = "https://dummyjson.com/products?limit=0";
const POST_ORDER_URL = "http://localhost:3000/orders";

export interface OrderItem {
  id: number;
  count: number;
}
export default class productsApi {
  static async getProducts() {
    const response = await axios.get(FETCH_PRODUCTS_URL);
    return response.data;
  }
  static async postOrder(order: OrderItem[]) {
    const response = await axios.post(POST_ORDER_URL, order);
    return response.data;
  }
}

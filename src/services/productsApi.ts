import axios from "axios";

const FETCH_PRODUCTS_URL = "https://dummyjson.com/products?limit=0";

export default class productsApi {
  static async getProducts() {
    const response = await axios.get(FETCH_PRODUCTS_URL);
    return response.data;
  }
}

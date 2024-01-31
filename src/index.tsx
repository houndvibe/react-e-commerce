import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App/App";
import store from "./redux/store";
import Shop from "./routes/Shop/Shop";
import Cart from "./routes/Cart/Cart";
import { fetchProducts } from "./redux/productsSlice";
import ProductPage from "./components/ProductPage/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>AppErrorElement</>,
    children: [
      { index: true, element: <>Index page</> },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          {
            path: "/shop/:productId",
            element: <ProductPage />,
            errorElement: <>AppErrorElement</>,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

store.dispatch(fetchProducts());

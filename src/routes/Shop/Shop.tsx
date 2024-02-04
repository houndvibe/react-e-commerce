import ProductsList from "../../components/ProductsList/ProductsList";
import { Flex } from "antd";
import { useSelector } from "react-redux";
import { selectSelectedProduct } from "../../redux/productsSlice";
import ProductPage from "../../components/ProductPage/ProductPage";

const Shop: React.FC = () => {
  const selectedProduct = useSelector(selectSelectedProduct);

  return (
    <div>
      <Flex gap={"middle"}>
        {selectedProduct && <ProductPage />}
        <ProductsList />
      </Flex>
    </div>
  );
};

export default Shop;

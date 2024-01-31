import { Outlet } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";
import { Flex } from "antd";

const Shop: React.FC = () => {
  return (
    <div>
      <Flex gap={"middle"}>
        <Outlet />
        <ProductsList />
      </Flex>
    </div>
  );
};

export default Shop;

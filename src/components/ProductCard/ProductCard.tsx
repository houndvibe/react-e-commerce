import { Button, Card, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { productProps, setSelectedProduct } from "../../redux/productsSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Link } from "react-router-dom";
const { Text } = Typography;

export interface productCardProps extends productProps {}

const ProductCard: React.FC<productCardProps> = ({
  brand,
  category,
  description,
  discountPercentage,
  id,
  images,
  price,
  rating,
  stock,
  thumbnail,
  title,
}) => {
  const dispatch = useAppDispatch();
  const handleClickProduct = () => {
    dispatch(setSelectedProduct(id));
  };
  return (
    <Link to={`${id}`}>
      {" "}
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" height={"150px"} src={thumbnail} />}
        onClick={handleClickProduct}
      >
        <Meta title={title} description={description} />
        <Text delete>{price}$</Text>
        <Text strong>{(price - price / discountPercentage).toFixed(2)}$</Text>
        <br />
        <Text>{stock} in stock</Text>
        <br />
        <Text>rating - {rating}</Text>
      </Card>
    </Link>
  );
};

export default ProductCard;

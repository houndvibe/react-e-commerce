import { Card, Flex, Rate, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { productProps, setSelectedProduct } from "../../redux/productsSlice";
import { useAppDispatch } from "../../redux/hooks";
import classes from "./ProductCard.module.scss";

const { Text } = Typography;

export interface productCardProps extends productProps {}

const ProductCard: React.FC<productCardProps> = ({
  description,
  discountPercentage,
  id,
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
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" height={"150px"} src={thumbnail} />}
      onClick={handleClickProduct}
    >
      <div className={classes.content}>
        <Meta
          title={title}
          description={description}
          className={classes.description}
        />
        <Flex gap={"small"}>
          <Text delete>{price}$</Text>
          <Text strong>{(price - price / discountPercentage).toFixed(2)}$</Text>
        </Flex>

        <Text>{stock} in stock</Text>
        <Rate allowHalf defaultValue={rating} />
      </div>
    </Card>
  );
};

export default ProductCard;

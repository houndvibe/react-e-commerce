import { Card, Typography } from "antd";
import Meta from "antd/es/card/Meta";
const { Text } = Typography;

const ProductCard = () => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
      <Text strong>49.99$</Text>
    </Card>
  );
};

export default ProductCard;

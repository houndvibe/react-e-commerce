import { ConfigProvider, InputNumber, InputNumberProps } from "antd";

interface MyInputNumberProps extends InputNumberProps {
  width?: number;
}

const MyInputNumber: React.FC<MyInputNumberProps> = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          InputNumber: {
            controlWidth: props.width || 90,
          },
        },
      }}
    >
      <InputNumber {...props} />
    </ConfigProvider>
  );
};

export default MyInputNumber;

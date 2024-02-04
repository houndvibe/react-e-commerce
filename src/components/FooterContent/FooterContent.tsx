import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Flex, Typography } from "antd";
import classes from "./FooterContent.module.scss";
const FooterContent = () => {
  return (
    <div className={classes.footer}>
      <Flex gap={"large"} justify="center" align="end">
        <Typography.Text className={classes.text}>
          {"Copyright ©2024 "}
        </Typography.Text>
        <a href="http://instagram.com">
          <InstagramOutlined />
        </a>
        <a href="http://twitter.com">
          <TwitterOutlined />
        </a>
        <a href="http://facebook.com">
          <FacebookOutlined />
        </a>
        <a href="http://linkedin.com">
          <LinkedinOutlined />
        </a>
        <a href="http://github.com">
          <GithubOutlined />
        </a>
      </Flex>
    </div>
  );
};

export default FooterContent;

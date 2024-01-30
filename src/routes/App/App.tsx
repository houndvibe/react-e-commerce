import { Flex, Layout } from "antd";
import classes from "./App.module.scss";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Layout className={classes.layout} hasSider={true}>
        <Layout>
          <Header className={classes.header}>
            <Flex justify="space-between">
              <div>React e-Commerece Demo</div>
              <Flex wrap="wrap" gap="middle">
                <NavLink to="shop" className={classes.navlink}>
                  Shop
                </NavLink>
                <NavLink to="cart" className={classes.navlink}>
                  Cart
                </NavLink>
              </Flex>
            </Flex>
          </Header>
          <Content className={classes.content}>
            <Outlet />
          </Content>
          <Footer className={classes.footer}>Footer</Footer>
        </Layout>
        <Sider className={classes.sider} width={"0px"}>
          Sider
        </Sider>
      </Layout>
    </div>
  );
};

export default App;

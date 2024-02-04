import { Button } from "antd";
import { Link } from "react-router-dom";
import classes from "./IndexPage.module.scss";
const IndexPage = () => {
  return (
    <div className={classes.indexPage}>
      <div className={classes.welcome}>WELCOME!</div>
      <Link to={"shop"}>
        <Button>Start shopping</Button>
      </Link>
    </div>
  );
};

export default IndexPage;

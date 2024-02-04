import { Carousel } from "antd";
import classes from "./MyCarousel.module.scss";

interface carouseleProps {
  content: string[];
}

const MyCarousel: React.FC<carouseleProps> = ({ content }) => {
  return (
    <div className={classes.carousel}>
      <Carousel autoplay>
        {content.map((image) => {
          return (
            <div className={classes.carousel__wrapper}>
              <div className={classes.carousel__top}>
                <img src={image} className={classes.carousel__image} />
              </div>
              <div className={classes.carousel__bottom}></div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MyCarousel;

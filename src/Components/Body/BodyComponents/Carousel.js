// rafce
import React from "react";
import { makeStyles } from "@mui/styles";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const useStyles = makeStyles((theme) => ({
  carouselLink: {
      display: "block"
  },
  carouselImage: {
    width: "100%"
  }
}))

const Carousel = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Slider>
        {props.carouselImg.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <a href="#a" className={classes.carouselLink}>
                <img className={classes.carouselImage} src={item} alt="" />
              </a>
            </React.Fragment>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;

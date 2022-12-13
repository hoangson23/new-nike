//rafce
import React from "react";
import { makeStyles } from "@mui/styles";
import Carousel from "./BodyComponents/Carousel";
import Trending from "./BodyComponents/Trending";
import ProductScroll from "./BodyComponents/ProductScroll";
import MoreNike from "./BodyComponents/MoreNike";
import DontMiss from "./BodyComponents/DontMiss";
import DowloadApp from "./BodyComponents/DowloadApp";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "0 44px 50px",
  },
  bodyComponent: {
    marginTop: "84px",
  },
}));

const Body = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      {/* Carousel */}
      <div className={classes.bodyComponent}>
        <Carousel carouselImg={props.carouselImg} />
      </div>
      {/* Dowload App */}
      <div className={classes.bodyComponent}>
        <DowloadApp
        dataDowloadApp = {props.dataDowloadApp}
        />
      </div>
      {/* Trending */}
      <div className={classes.bodyComponent}>
        <Trending
          dataTrending={props.dataTrending}
          titleTrending={props.titleTrending}
        />
      </div>
      {/* ProductScroll */}
      <div className={classes.bodyComponent}>
        <ProductScroll />
      </div>
      {/* Don't Miss */}
      <div className={classes.bodyComponent}>
        <DontMiss
          titleDontMiss={props.titleDontMiss}
          dataDontMiss={props.dataDontMiss}
        />
      </div>
      {/* MoreNike */}
      <div className={classes.bodyComponent}>
        <MoreNike
          dataMoreNike={props.dataMoreNike}
          titleMoreNike={props.titleMoreNike}
        />
      </div>
    </div>
  );
};

export default Body;

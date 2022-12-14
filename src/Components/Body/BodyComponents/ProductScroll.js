import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    whiteSpace: "nowrap", // giúp các ảnh nằm trên cùng 1 dòng
    overflowX: "hidden", 
    cursor: "pointer",
    "&:hover": {
      overflowX: "scroll", // tạo ra thanh cuộn ngang
    },
    //màu  sắc, độ rộng thanh cuộn
    "&::-webkit-scrollbar": { 
      backgroundColor: "#f5f5f5",
      height: 8,
    },
    // khung thanh cuộn
    "&::-webkit-scrollbar-track": {
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      borderRadius: 10,
      backgroundColor: "#f5f5f5",
    },
    // thanh cuộn
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 10,
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      backgroundColor: "#757575",
    },
  },
  product: {
    width: 390,
    listStyle: "none",
    display: "inline-block",
    marginRight: 20,
    marginBottom: 40,
  },
  productImage: {
    "&:hover": {
      opacity: 0.7,
    },
    height: 400,
    width: "100%",
  },
}));

const ProductScroll = () => {
  const classes = useStyles();
  const data = useSelector((state) => state.reducerURL.data);
  const isLoading = useSelector((state) => state.reducerURL.isLoading);
  const listProduct = data.slice(0, 5).map((item, key) => {
    return (
      <li key={key} className={classes.product}>
        <Link to={`detailPage/${item._id}`}>
          <img src={item.img} className={classes.productImage} alt="" />
        </Link>
      </li>
    );
  });
  const listScrollLazyLoad = [];
  for (let i = 0; i < 5; i++) {
    listScrollLazyLoad.push(
      <li className={classes.product} key={i}>
        <Skeleton>
          <img
            src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b0cccd97-5dc7-4dba-b720-ab7863109ebf/exploration-series-basketball-t-shirt-8dkWTQ.jpg"
            className={classes.productImage}
            alt=""
          />
        </Skeleton>
      </li>
    );
  }
  return (
    <div>
      {isLoading ? (
        <ul className={classes.container}>{listScrollLazyLoad}</ul>
      ) : (
        <ul className={classes.container}>{listProduct}</ul>
      )}
    </div>
  );
};

export default ProductScroll;

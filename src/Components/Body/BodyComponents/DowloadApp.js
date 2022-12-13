import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  dowloadAppTitle:{
      display: "block",
      width: "max-content",
      textDecoration: "none",
      color: "#111111",
      margin: " 0 auto",
      marginTop: "50px",
      lineHeight: "28px",
      padding: 0,
      "&:hover" :{
        cursor: "pointer",
        textDecoration: "none",
        color: "#111111"
      }
    },
    dowloadAppEvent:{
      fontFamily: "Arial, Helvetica, sans-serif",
      textTransform: "uppercase",
      fontSize: "70px",
      fontWeight: 900,
      textAlign: "center",
      transform: "translateY(-10px)"
    },
    dowloadAppDesc:{
      textAlign: "center",
      marginBottom: "25px",
  
    },
    trendingSecondDesc:{
      textAlign: "center",
      marginBottom: "30px",
  
    },
    dowloadBtn:{
      display: "inline-block",
      color: "#fff",
      backgroundColor: "#111",
      padding: "6px 20px",
      border: " 1.5px solid #111",
      borderRadius: "30px",
      transform: "translateX(400px)",
      "&:hover": {
        backgroundColor: "#757575",
        border: " 1.5px solid #757575"
      }
    },
      shopBtn:{
        display: "inline-block",
        margin: "0 auto",
        color: "#fff",
        backgroundColor: "#111",
        padding: "6px 20px",
        border: " 1.5px solid #111",
        transform: "translateX(410px)",
        borderRadius: "30px",
        "&:hover": {
          backgroundColor: "#757575",
          border: " 1.5px solid #757575"
        }
      }
}));

const DowloadApp = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.dowloadAppContainer}>
      {props.dataDowloadApp.map((item, key) => {
        return (
          <React.Fragment key={key}>
            <h5 className={classes.dowloadAppTitle}>{item.title}</h5>
            <h1 className={classes.dowloadAppEvent}>{item.events}</h1>
            <h5 className={classes.dowloadAppDesc}>{item.desc}</h5>
            <button className={classes.dowloadBtn}>{item.dowloadButton}</button>
            <button className={classes.shopBtn}>{item.shopButton}</button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default DowloadApp;

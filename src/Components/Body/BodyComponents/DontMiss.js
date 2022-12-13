import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  dontMissContainer: {
    display: "flex",
    maxWidth: "100%",
    justifyContent: "space-between"
  },
  dontMissItem:{
    maxWidth: "49.5%",
  },
  dontMissTitle:{
    display: "block",
    padding: "0 65px",
    transform: "translateY(-100px)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 550
  },
  dontMissImage: {
    width: "100%",
  },
  dontMissButton:{
    display: "block",
    padding: "6px 20px",
    backgroundColor: "#fff",
    border: "1.5px solid #fff",
    borderRadius: "30px",
    color: "#111",
    margin: " 0 65px",
    transform: "translateY(-85px)",
    "&:hover":{
        backgroundColor: "#ddd",
        border: "1.5px solid #ddd"
    }
  }
}));

const DontMiss = (props) => {
  const classes = useStyles();
  return (
    <div>
      <h2>{props.titleDontMiss}</h2>
      <div className={classes.dontMissContainer}>
        {props.dataDontMiss.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <div className={classes.dontMissItem}>
                <img className={classes.dontMissImage} src={item.img} alt="" />
                <span className={classes.dontMissTitle}>{item.title}</span>
                <button className={classes.dontMissButton}>
                  {item.titleButton}
                </button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default DontMiss;

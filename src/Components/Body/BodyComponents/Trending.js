import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  trendingLink:{
    display: "block"
  },
  trendingImage:{
    maxWidth: "100%",
  },
  trendingLocalLink:{
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
  titleTrending:{
    fontFamily: "Arial, Helvetica, sans-serif",
    textTransform: "uppercase",
    fontSize: "70px",
    fontWeight: 900,
    textAlign: "center",
    transform: "translateY(-10px)"
  },
  trendingFirstDesc:{
    textAlign: "center",
    marginBottom: "25px",

  },
  trendingSecondDesc:{
    textAlign: "center",
    marginBottom: "30px",

  },
  trendingButton:{
    display: "block",
    margin: "0 auto",
    color: "#fff",
    backgroundColor: "#111",
    padding: "6px 20px",
    border: " 1.5px solid #111",
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "#757575",
      border: " 1.5px solid #757575"
    }
  }
}))

const Trending = (props) => {
  const classes = useStyles()
  return (
    <div>
      <h2>{props.titleTrending}</h2>
      {
        props.dataTrending.map((item, key) =>{
          return(
            <React.Fragment key={key}>
              <a href='#a' className={classes.trendingLink}>
                <img className={classes.trendingImage} src={item.img} alt="" />
              </a>
              <a href='#a' className={classes.trendingLocalLink}>{item.localLink}</a>
              <h1 className={classes.titleTrending}>{item.title}</h1>
              <h6 className={classes.trendingFirstDesc}>{item.firstDesc}</h6>
              <h6 className={classes.trendingSecondDesc}>{item.secondDesc}</h6>
              <button className={classes.trendingButton}>{item.buttonTrending}</button>
            </React.Fragment>
          )
        })
      }
    </div>
  )
}

export default Trending
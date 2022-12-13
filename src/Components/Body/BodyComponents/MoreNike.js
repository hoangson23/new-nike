import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  moreNikeContainer:{
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  moreNikeItem:{
    maxWidth: "32.8%"
  },
  moreNikeImage:{
    maxWidth: "100%"
  },
  moreNikeButton:{
    display: "block",
    padding: "6px 20px",
    marginLeft: "35px",
    transform:"translateY(-60px)",
    backgroundColor: "#fff",
    color: "#111",
    border: "1.5px solid #fff",
    borderRadius: "30px",
    "&:hover":{
      border: " 1.5px solid #ddd",
      backgroundColor: "#ddd"
    }
  }
}))

const MoreNike = (props) => {
  const classes = useStyles()
  return (
    <div>
      <h2>{props.titleMoreNike}</h2>
      <div className={classes.moreNikeContainer}>
        {
          props.dataMoreNike.map((item, key) => {
            return(
              <React.Fragment key={key}>
                <div className={classes.moreNikeItem}>
                  <a href='#a'>
                    <img className={classes.moreNikeImage} src={item.img} alt=''/>
                  </a>
                  <button className={classes.moreNikeButton}>{item.titleButton}</button>
                </div>
              </React.Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default MoreNike
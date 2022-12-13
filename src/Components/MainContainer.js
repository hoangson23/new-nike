import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Body from './Body/Body'


const MainContainer = (props) => {
  return (
    <React.Fragment>
        <CssBaseline/>
        <Container>
            <Body
            carouselImg = {props.carouselImg}
            dataDowloadApp = {props.dataDowloadApp}
            titleTrending= {props.titleTrending}
            dataTrending= {props.dataTrending}
            titleMoreNike = {props.titleMoreNike}
            dataMoreNike = {props.dataMoreNike}
            titleDontMiss = {props.titleDontMiss}
            dataDontMiss={props.dataDontMiss}
            merchMenu= {props.merchMenu}
            />
        </Container>
    </React.Fragment>
    )
}

export default MainContainer
import "react-app-polyfill/ie11";
import * as React from "react";
import { Box, Center, Container, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

const AuthorMeta = styled.div`
  z-index: 10;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px 0;
  font-family: Georgia, serif;
  font-style: italic;
`;

const AuthorName = styled.div`
    height: 0px;
    padding: 0px;
    font-size: 50px;
    font-family: Monospace, Monaco;
    color: white;
    font-style: bold;
    font-weight: bold;
`;

const AuthorTitle = styled.div`
    height: 15px;
    padding: 15px;
    font-size: 30px;
    font-family: Monospace, Monaco;
    font-style: bold;
    font-weight: bold;
`;

const Body = styled.div`
  background-color: gray;
`;


const BackgroundPicture = styled.div`
    background-image: url("https://i.pinimg.com/originals/d5/c8/7c/d5c87c9160550d386791069339bbd762.jpg");
`;

// import { Link } from 'react-router-dom';
// import { About } from '../About/About';


export const Home = () => {
  //   const formik  = useFormikContext();
  //   const values = formik?.values as Values;
  return (
    <Grid
        templateRows="repeat(1, 1fr)"
        >
      <BackgroundPicture>
    <Center h="200px">
      {/* <Image src="https://i.pinimg.com/originals/d5/c8/7c/d5c87c9160550d386791069339bbd762.jpg"></Image> */}
      <AuthorMeta></AuthorMeta>
      <GridItem h="0px" padding="0px"><Image src="https://raw.githubusercontent.com/yaritaft/my_django_web_page/master/staticfiles/cv/images/DSC4523.c223f84f886b.jpg" borderRadius="full" boxSize="150px" /> </GridItem> 

    </Center>
    <Center h="0px" padding="80px">
      <AuthorName>

      <GridItem>YARI IVAN TAFT</GridItem> 
      </AuthorName>
    </Center>
      </BackgroundPicture>
    <Center h="0px" padding="5px">
      <AuthorTitle>

      <GridItem h="15px" padding="15px">
        <Container color="GrayText" fontSize="30px">Full Stack Developer - Working at Vindow</Container> </GridItem> 
      </AuthorTitle>
    </Center>
      </Grid>
  );
};
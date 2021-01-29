import "react-app-polyfill/ie11";
import * as React from "react";
import { Box, Center, Container, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

// import { Link } from 'react-router-dom';
// import { About } from '../About/About';

export const Home = () => {
  //   const formik  = useFormikContext();
  //   const values = formik?.values as Values;
  return (
    <Grid
        templateRows="repeat(1, 1fr)"
        >
    <Center h="200px">
      <GridItem h="0px" padding="0px"><Image src="https://raw.githubusercontent.com/yaritaft/my_django_web_page/master/staticfiles/cv/images/DSC4523.c223f84f886b.jpg" borderRadius="full" boxSize="150px" /> </GridItem> 
    </Center>
    <Center h="0px" padding="80px">
      <GridItem h="0px" padding="0px"><Heading fontSize="50px">YARI IVAN TAFT</Heading> </GridItem> 
    </Center>
    <Center h="0px" padding="5px">
      <GridItem h="15px" padding="15px"><Container color="GrayText" fontSize="30px">Full Stack Developer - Working at Vindow</Container> </GridItem> 
    </Center>
      </Grid>
  );
};
import "react-app-polyfill/ie11";
import * as React from "react";
import { Center, Image } from "@chakra-ui/react";

// import { Link } from 'react-router-dom';
// import { About } from '../About/About';

export const Home = () => {
  //   const formik  = useFormikContext();
  //   const values = formik?.values as Values;
  return (
    <Center h="400px">
      <Image src="https://bit.ly/sage-adebayo" borderRadius="full" boxSize="150px" />
    </Center>
  );
};

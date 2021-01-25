import * as React from 'react';
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";
// import { Formik, Field, Form, FormikHelpers, useFormikContext } from 'formik';

// interface Values {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

export const About = () => {
//   const formik  = useFormikContext();
// const { values, submitForm } = useFormikContext();
//   const values = formik?.values as Values;
  return (
    <Box p="5" maxW="320px" borderWidth="1px">
      <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
      <Flex align="baseline" mt={2}>
        <Badge >Plus</Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="pink.800"
        >
          Verified &bull; Cape Town
        </Text>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        Modern, Chic Penthouse with Mountain, City & Sea Views
      </Text>
      <Text mt={2}>$119/night</Text>
      <Flex mt={2} align="center">
        <Text ml={1} fontSize="sm">
          <b>4.84</b> (190)
        </Text>
      </Flex>
    </Box>
  );
};

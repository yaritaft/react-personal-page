import * as React from 'react';
import { Container, Center } from "@chakra-ui/react";
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
    <Center h="500px">

    <Container fontSize="xl" maxW="xl" >
      My name is Yari Ivan Taft, I am full stack developer. I love learning things and teaching those things. I help people to improve their jobs conditions. If you want to know more about me, you have my github and social networks on the icons above.
    </Container>
    </Center>
  );
};

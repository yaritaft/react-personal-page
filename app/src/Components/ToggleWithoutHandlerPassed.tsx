import "react-app-polyfill/ie11";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers, useFormikContext } from "formik";
import { MyName } from "./MyName";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikForm = () => {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: ""
        }}
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <MyName></MyName>
        </Form>
      </Formik>
    </div>
  );
};

import 'react-app-polyfill/ie11';
import * as React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export const Contact = () => {
  return (
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
    <div>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <button type="submit">Submit</button>
    </div>
    </Form>
  </Formik>
  
  );
};

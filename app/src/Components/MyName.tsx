import 'react-app-polyfill/ie11';
import * as React from 'react';
import { Formik, Field, Form, FormikHelpers, useFormikContext } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export const MyName = () => {
//   const formik  = useFormikContext();
const { values, submitForm } = useFormikContext();
//   const values = formik?.values as Values;
  return (
    <div>
      <h1>Signup</h1>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          {(values as Values)?.firstName}
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <button type="submit">Submit</button>
    </div>
  );
};

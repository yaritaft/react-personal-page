import "react-app-polyfill/ie11";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Contact } from "../Contact/Contact";
import { Home } from "../Home/Home";
import { Blog } from "../Blog/Blog";
import { About } from "../About/About";
import { SideBar } from "../SideBar/SideBar";
// import { Link } from 'react-router-dom';
// import { About } from '../About/About';

export const Header = () => {
  //   const formik  = useFormikContext();
  //   const values = formik?.values as Values;
  return (
      <SideBar />
  )
};

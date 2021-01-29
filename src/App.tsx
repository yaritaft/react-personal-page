import React from "react";
// import './App.css';
import { Contact } from "./Components/Contact/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Blog } from "./Components/Blog/Blog";
import { About } from "./Components/About/About";
import { SideBar } from "./Components/SideBar/SideBar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
          <SideBar></SideBar>
            <Switch>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/blog">
                <Blog />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;

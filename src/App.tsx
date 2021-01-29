import React from "react";
// import './App.css';
import { Contact } from "./Components/Contact/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { SideBar } from "./Components/SideBar/SideBar";
import { ChakraProvider } from "@chakra-ui/react";
import { appName } from "./constants";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
          <SideBar></SideBar>
            <Switch>
              <Route exact path={`${appName}/contact`}>
                <Contact />
              </Route>
              <Route exact path={`${appName}/home`}>
                <Home />
              </Route>
              <Route exact path={`${appName}/about`}>
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

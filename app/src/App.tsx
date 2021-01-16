import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Contact } from './Components/Contact';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from './Components/Home';
import { Blog } from './Components/Blog';
import { About } from './Components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <div>
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
      </div>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

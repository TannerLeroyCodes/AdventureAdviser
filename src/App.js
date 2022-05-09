import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AdventureList from './AdventureList';
import AdventureSubmit from './AdventureSubmit';


function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/adventures">
        <AdventureList/>
      </Route>
      <Route path="/submit">
        <AdventureSubmit/>
      </Route>
    </Switch>


    <div className="App">
      Hello
    </div>
    </>
  );
}

export default App;

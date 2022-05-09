import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AdventureList from './AdventureList';
import AdventureSubmit from './AdventureSubmit';


function App() {
  return (
    <>
    <NavBar/>
    <Switch>
    <Route  path="/">
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
      We've got some work to do. 
    </div>
    </>
  );
}

export default App;

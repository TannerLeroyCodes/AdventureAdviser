import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home';
import AdventureList from './AdventureList';
import AdventureSubmit from './AdventureSubmit';
import ErrorPage from './ErrorPage';

function App() {

const [adventures, setAdventures] = useState([])

useEffect(()=> {
  fetch("http://localhost:8000/adventures")
  .then(r => r.json())
  .then(data => setAdventures(data))
}, [])


  return (
    <Router>
    <NavBar className={"Navbar"}/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/adventures" element={<AdventureList adventures={adventures}/>}/>
      <Route path="/adventures/new" element={<AdventureSubmit/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    </Router>
  );
}

export default App;

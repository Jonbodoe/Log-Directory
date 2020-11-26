import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Tabs from './Directory/Javascript/Tabs/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Slider from './Directory/Javascript/Slider/Slider';
// import Filter from './Directory/Javascript/Filter/Filter';
// import Header from './Components/Header';
import Container from './Components/Container';
import Navigation from './Components/Navigation';
// import directoryData from '.App.test/DirectoryData'
import JavascriptDirectory from './Routes/JavascriptDirectory'
// import directoryData from './DirectoryData'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import CSSDirectory from './Routes/CSSDirectory';

// import Http from './Directory/Javascript/HTTP/Http';


function App() {
  return (
    <Router>
      <Container>
        <div className="col-md-2 h-100 fixed-top bg-gray border-right">
          <Navigation />
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-10 px-5 py-3">
          <Switch>
            <Route path="/javascript-directory">
              <JavascriptDirectory />
            </Route>
            <Route path="/css-directory">
              <CSSDirectory />
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}





export default App;




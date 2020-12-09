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
import FrontendUI from './Pages/FrontendUI'
import CSSDirectory from './Pages/CSSDirectory';
import BackendHandling from './Pages/BackendHandling';
import HomeDirectory from './Pages/HomeDirectory'
// import directoryData from './DirectoryData'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


// import Http from './Directory/Javascript/HTTP/Http';


function App() {
  return (
    <Router>
      <Navigation />
      <Container>
        <div className="col-md-12 px-5">
          <Switch>
            <Route exact path="/">
              <HomeDirectory/>
            </Route>
            <Route path="/frontend-ui">
              <FrontendUI />
            </Route>
            <Route path="/backend-handling">
              <BackendHandling />
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




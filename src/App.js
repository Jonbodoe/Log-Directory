import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Components/Container';
import Navigation from './Components/Navigation';
import DirectoryURLs from './Routes/DirectoryURLs';


function App() {
  return (
    <Router>
      <Navigation />
      <Container>
        <div className="col-md-12 px-5">
          <Switch>
            {
              DirectoryURLs.map((urls, i) => {
                return <Route path={urls.url} key={i} exact component={urls.component}/>
              })
              // Mapping out Component List
            }
          </Switch>
        </div>
      </Container>
    </Router>
  );
}





export default App;




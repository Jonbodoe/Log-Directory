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
// import Navigation from './Components/Navigation';
import DirectoryData from './Data/DirectoryData';
import CategoryPage from './Page-Template/CategoryPage';


function App() {
  return (
    <Router>
      <Container>
        <div className="col-md-12 px-5">
          <Switch>
            {
              DirectoryData.map((data, i) => {
                return <Route
                  exact path={data.url}
                  key={i}
                >
                  <CategoryPage
                    id={data.id}
                    header={data.header}
                    subTitle={data.subTitle}
                  />
                </Route>
              })
            }
          </Switch>
        </div>
      </Container>
    </Router>
  );
}





export default App;




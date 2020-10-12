import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Tabs from './Directory/Javascript/Tabs/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Directory/Javascript/Slider/Slider';
import Filter from './Directory/Javascript/Filter/Filter';
import Header from './Components/Header';
import Container from './Components/Container';
import Navigation from './Components/Navigation';

// import Http from './Directory/Javascript/HTTP/Http';


function App() {
  return (
    <Container>
      <div className="col-md-2 bg-light">
        <Navigation />
      </div>
      <div className="col-md-10 px-5 py-3">
        <Header title={`Javascript`} subTitle={`From API requests to User Interface components`} />
        <Filter />
        {/* <hr className="my-5 w-75" /> */}
        <Slider />
          <Tabs />
      </div>
    </Container>
  );
}





export default App;




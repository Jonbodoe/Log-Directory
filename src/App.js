import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Tabs from './Directory/Javascript/Tabs/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Directory/Javascript/Slider/Slider';
import Http from './Directory/Javascript/HTTP/Http';


function App() {
  return (
    <>
      <main>
        <Slider/>
        <hr className="my-5 w-75"/>
        <Tabs/>
        <hr className="my-5 w-75"/>
        <Http/>
      </main>
    </>
  );
}





export default App;




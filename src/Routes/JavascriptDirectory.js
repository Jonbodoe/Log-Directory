import React from 'react';
import Http from '../Directory/Javascript/HTTP/Http';
import Header from './../Components/Header';
import Filter from './../Directory/Javascript/Filter/Filter'
import Slider from './../Directory/Javascript/Slider/Slider'
import Tabs from './../Directory/Javascript/Tabs/Tabs'
// import UICategory from './UICategory';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

const JavascriptDirectory = () => {
    return <>
        <Header title={`Javascript`} subTitle={`From API requests to User Interface components`} />
        <Tabs/>
        <Slider/>
        <Filter/>
        <Http/>
    </>
}

export default JavascriptDirectory
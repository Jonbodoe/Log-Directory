import React from 'react';
import Http from '../Directory/Javascript/HTTP/Http';
import Header from '../Components/Header';
import Filter from '../Directory/Javascript/Filter/Filter'
import Slider from '../Directory/Javascript/Slider/Slider'
import Tabs from '../Directory/Javascript/Tabs/Tabs'

import CourtesyNav from '../Components/CourtesyNav';
import Container from '../Components/Container';
// import DirectoryURLs from '../Routes/DirectoryURLs';
// import UICategory from './UICategory';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

const FrontendUI = () => {
    return <>
        <Container>
            <CourtesyNav />
            <div className="col-md-10 p-5">
                <Header title={`Frontend UI`} subTitle={`User Interface Components`} />
                <Tabs />
                <Slider />
                <Filter />
                <Http />
            </div>
        </Container>
    </>
}

export default FrontendUI
import React from 'react';
import Http from '../Directory/FrontendUI/HTTP/Http';
import Header from '../Components/Header';
import Filter from '../Directory/FrontendUI/Filter/Filter'
import Slider from '../Directory/FrontendUI/Slider/Slider'
import Tabs from '../Directory/FrontendUI/Tabs/Tabs'

import CourtesyNav from '../Components/CourtesyNav';
import Container from '../Components/Container';
import Carousel from '../Directory/FrontendUI/Carousel/Carousel';
// import Navigation from '../Components/Navigation';
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
                {/* <Navigation/> */}
                <Header title={`Frontend UI`} subTitle={`User Interface Components`} />
                <Tabs />
                <Slider />
                <Carousel />
                <Filter />
                <Http />
            </div>
        </Container>
    </>
}

export default FrontendUI
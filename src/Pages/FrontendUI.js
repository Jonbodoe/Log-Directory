import React from 'react';
import Http from '../Directory/Javascript/HTTP/Http';
import Header from '../Components/Header';
import Filter from '../Directory/Javascript/Filter/Filter'
import Slider from '../Directory/Javascript/Slider/Slider'
import Tabs from '../Directory/Javascript/Tabs/Tabs'
import {
    Link
} from "react-router-dom";
import CourtesyNav from '../Components/CourtesyNav';
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
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 border-right">
                    <div className="sticky-top pr-4">
                        <div className="row">
                            {/* <div className="row"> */}
                            <p className="font-weight-bold h5 pt-3">Components</p>
                            {/* Create Accordian Navigation */}
                            <CourtesyNav/>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-10 p-5">
                    <Header title={`Javascript`} subTitle={`From API requests to User Interface components`} />
                    <Tabs />
                    <Slider />
                    <Filter />
                    <Http />
                </div>
            </div>
        </div>
    </>
}

export default FrontendUI
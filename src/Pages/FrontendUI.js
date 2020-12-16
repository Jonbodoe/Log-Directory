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
                    <div className="sticky-top p-4">
                        <div className="d-flex flex-column">
                            <p className="font-weight-bold h5">Components</p>
                            
                            {/* Create Accordian Navigation */}
                            <CourtesyNav/>
                            <Link className="py-1 text-success font-weight-bold" to="/frontend-ui">Frontend UI</Link>
                            <Link className="py-1 text-secondary" to="/#tabs">Tabs</Link>
                            <Link className="py-1 text-secondary" to="/#slider">Slider</Link>
                            <Link className="py-1 text-secondary" to="/#filter">Filter</Link>
                            <Link className="py-1 text-secondary" to="/#tableData">Table Data</Link>
                            <Link className="py-1 text-success font-weight-bold" to="/Backend-Handling">Backend Handling</Link>
                            <Link className="py-1 text-success font-weight-bold" to="/CSS-Animations">CSS Animations</Link>
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
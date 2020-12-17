import React from 'react';
// import directoryData from '../DirectoryData'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
} from "react-router-dom";
import DirectoryURLs from '../Routes/DirectoryURLs';
import log from './../log.svg';
// import JavascriptDirectory from '../Routes/JavascriptDirectory';

const Navigation = () => {
    return <>
        <nav className="bg-white d-flex justify-content-between pb-4">
            {/* <div className="navbar-brand d-flex"> */}
                <Link className="text-success" to="../">
                    <img className="text-success" id="NavBar-Logo" src={log} alt="brand logo" />
                </Link>
            {/* </div> */}
            <div className="d-flex align-items-center">
                {
                    DirectoryURLs.map((urls, i) => {
                        return <Link className="text-dark px-2" key={i} to={urls.url}>{urls.label}</Link>
                    })
                }
                <Link className="text-dark px-2" to="#">
                    <i className="fab fa-github fa-2x"></i>
                </Link>
            </div>
        </nav>
    </>
}

export default Navigation
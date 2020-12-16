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
    DirectoryURLs.map(urls => {
        return console.log(urls.url)
    })
    // const jsConcepts = directoryData.JavascriptCategories[0].componentList;
    // console.log(jsConcepts)
    // directoryData.map(data => console.log(data))
    return <>
        <nav className="bg-white d-flex justify-content-between px-5">
            <div className="navbar-brand font-weight-bold pb-4 d-flex">
                <Link className="text-success" to="../">
                    <img className="text-success" id="NavBar-Logo" src={log} alt="brand logo"/>
                </Link>
            </div>
            <div className="d-flex align-items-center">
                {
                    DirectoryURLs.map((urls, i) => {
                        return  <Link className="text-dark px-2" key={i} to={urls.url}>{urls.label}</Link>
                    })
                }
{/* 
                <Link className="text-dark px-2" exact="true" to="/">Home</Link>
                <Link className="text-dark px-2" to="/frontend-ui">Frontend</Link>
                <Link className="text-dark px-2" to="/backend-handling">Backend</Link>
                <Link className="text-dark px-2" to="/CSS-directory">CSS Directory</Link> */}
                <Link className="text-dark px-2" to="#">
                    <i className="fab fa-github fa-2x"></i>
                </Link>
            </div>
        </nav>
    </>
}

export default Navigation
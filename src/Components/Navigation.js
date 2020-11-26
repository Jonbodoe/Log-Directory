import React from 'react';
// import directoryData from '../DirectoryData'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
} from "react-router-dom";
// import JavascriptDirectory from '../Routes/JavascriptDirectory';

const Navigation = () => {
    // const jsConcepts = directoryData.JavascriptCategories[0].componentList;
    // console.log(jsConcepts)
    // directoryData.map(data => console.log(data))
    return <>
        <nav className="fixed-top p-3 d-flex flex-column">
            <div className="navbar-brand font-weight-bold">Log</div>
            <div className="d-flex flex-column">
                <Link className="text-success" to="/javascript-directory">Javascript Directory</Link>
                <Link className="text-success" to="/CSS-directory">CSS Directory</Link>
            </div>
        </nav>
    </>
}

export default Navigation
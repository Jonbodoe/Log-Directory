import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import DirectoryURLs from '../Routes/DirectoryURLs';
import {
    Link,
    useLocation
} from "react-router-dom";
import log from './../log.svg';

const NavLinks = (props) => {
    const location = useLocation();
    const checkActiveLink = location.pathname === props.urlData.url ? 'text-success' : 'text-secondary';
    const showSubLinks = location.pathname === props.urlData.url ? '' : 'not-active';
    // console.log(location.pathname);
    return <>
        <div className="pt-3 w-100">
            <Link className={`font-weight-bolder ${checkActiveLink}`} to={props.urlData.url}>{props.urlData.label}</Link>
            <i className={`fas fa-chevron-down p-1 ml-2 ${checkActiveLink}`}></i>
        </div>
        <div className={`d-flex flex-column pl-3`}>
            {
                props.urlData.subPages.map((url, i) => {
                    return <HashLink className={`text-secondary ${showSubLinks}`} to={url.url} key={i}>{url.label}</HashLink>
                })
                // Mapping sub-links from url directory
            }
        </div>
    </>
}

const CourtesyNav = () => {
    const [activeLink, setActiveLink] = useState()
    const getLinks = DirectoryURLs.filter(urls => urls.subPages)
    return <>
        <div className="col-md-2 border-right">
            <div className="sticky-top pr-4">
                <div className="row">
                    {/* <div className="row"> */}
                    <Link className="text-success pt-4" to="../">
                        <img className="text-success" id="NavBar-Logo" src={log} alt="brand logo" />
                    </Link>
                    <p className="font-weight-bold h5 pt-3">Components</p>
                    {/* Create Accordian Navigation */}
                    {
                        getLinks.map((urls, i) =>
                            <NavLinks key={i} urlData={urls} state={activeLink} handler={setActiveLink} />
                        )
                    }
                    {/* </div> */}
                </div>
            </div>
        </div>
    </>
}

// Three Categories w/ their own links
// 1 Active section must be opened based on the URL, maybe based on ID?
// 



export default CourtesyNav
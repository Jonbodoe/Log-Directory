import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import DirectoryURLs from '../Routes/DirectoryURLs';
import {
    Link
} from "react-router-dom";

const NavLinks = (props) => {
    return <>
        <div className="pt-3 w-100">
            <Link className="text-success font-weight-bolder" to={props.urlData.url}>{props.urlData.label}</Link>
            <i className="fas fa-chevron-down p-1 ml-2 text-success"></i>
        </div>
        <div className="d-flex flex-column pl-3">
        {
            props.urlData.subPages.map((url, i) => {
                return <HashLink className="text-secondary" to={url.url} key={i}>{url.label}</HashLink>
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
        {
            getLinks.map((urls, i) =>
                <NavLinks key={i} urlData={urls} state={activeLink} handler={setActiveLink}/>
            )
        }
    </>
}

// Three Categories w/ their own links
// 1 Active section must be opened based on the URL, maybe based on ID?
// 



export default CourtesyNav
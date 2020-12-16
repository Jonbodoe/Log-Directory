import React from 'react';
import DirectoryURLs from '../Routes/DirectoryURLs';
import {
    Link
} from "react-router-dom";

const CourtesyNav = () => {
    // const listURLs = []
    // DirectoryURLs.map(urls => {
    //     listURLs.push(urls.label)
    //     if ( urls.subPages ) {
    //         listURLs.push(urls.subPages.map(subURL => subURL.label))
    //     }
    //     // console.log(values)
    //     return listURLs
    // })
    // console.log(listURLs)
    return <>
        <NavLinks/>
        <div>Helllooo cuort</div>
    </>
    // console.log('ehllo')
}
const NavLinks = () => {
    const listURLs = []
    // const parentLink 
    return DirectoryURLs.map((urls, i) => {
        console.log(i)
        // pass id to function to filter through mapped list, returns data

        // const parentLink = <Link to={urls.url}>{urls.label}</Link>
        // if ( urls.subPages ) {
        //     listURLs.push(urls.subPages.map(subURL => subURL.label))
        // }
        // // console.log(values)
        // return listURLs
    })
    
}



export default CourtesyNav
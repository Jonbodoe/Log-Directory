
// import React from 'react';
import HomeDirectory from './../Pages/HomeDirectory'
import FrontendUI from './../Pages/FrontendUI';
import BackendHandling from './../Pages/BackendHandling';
import CSSAnimations from './../Pages/CSSDirectory';

const DirectoryURLs =  [

        {
            label: "Home",
            id: 'HOME',
            component: HomeDirectory,
            subPages: false,
            url: "/"
        },
        {
            label: "Frontend UI",
            id: "FRONTEND",
            component: FrontendUI,
            subPages:[
                // {
                //     label: "Frontend UI",
                //     url: "/frontend-ui"
                // },
                {
                    label: "Tabs",
                    parentId: "FRONTEND",
                    url: "/frontend-ui#tabs"
                },
                {
                    label: "Slider",
                    parentId: "FRONTEND",
                    url: "/frontend-ui#slider"
                },
                {
                    label: "Filter",
                    parentId: "FRONTEND",
                    url: "/frontend-ui#filter"
                },
                {
                    label: "HTTP",
                    parentId: "FRONTEND",
                    url: "/frontend-ui#http"
                }
            ],
            url: "/frontend-ui"
        },
        {
            label: "Backend Handling",
            id: "BACKEND",
            component: BackendHandling,
            subPages: [
                // {
                //     label: "Backend Handling",
                //     url: "/backend-handling"
                // },
                {
                    label: "Facebook API",
                    parentId: "BACKEND",
                    url: "/backend-handling#facebook-api"
                },
                {
                    label: "Google Maps API",
                    parentId: "BACKEND",
                    url: "/backend-handling#googlemaps-api"
                },
                {
                    label: "History Timeline",
                    parentId: "BACKEND",
                    url: "/backend-handling#history-timeline"
                },
                {
                    label: "Upload Image",
                    parentId: "BACKEND",
                    url: "/backend-handling/upload-image"
                },
            ],
            url: "/backend-handling"
        },
        {
            label: "CSS Animations",
            id: "CSS",
            component: CSSAnimations,
            subPages: [
                // {
                //     label: "CSS Animations",
                //     url: "/css-animations"
                // },
                {
                    label: "Bounding Box",
                    parentId: "CSS",
                    url: "/css-animations#bounding-box"
                },
            ],
            url: "/css-animations"
        },
    ]
    // FrontendUIpages: [
    //     {
    //         label: "Frontend UI",
    //         url: "/frontend-ui"
    //     },
    //     {
    //         label: "Tabs",
    //         url: "/frontend-ui#tabs"
    //     },
    //     {
    //         label: "Slider",
    //         url: "/frontend-ui#slider"
    //     },
    //     {
    //         label: "Filter",
    //         url: "/frontend-ui#filter"
    //     },
    //     {
    //         label: "HTTP",
    //         url: "/frontend-ui#http"
    //     }
    // ],
    // BackendHandlingpages: [
    //     {
    //         label: "Backend Handling",
    //         url: "/backend-handling"
    //     },
    //     {
    //         label: "Facebook API",
    //         url: "/backend-handling#facebook-api"
    //     },
    //     {
    //         label: "Google Maps API",
    //         url: "/backend-handling#googlemaps-api"
    //     },
    //     {
    //         label: "History Timeline",
    //         url: "/backend-handling#history-timeline"
    //     },
    //     {
    //         label: "Upload Image",
    //         url: "/backend-handling/upload-image"
    //     },
    // ],
    // CSSAnimations: [
    //     {
    //         label: "CSS Animations",
    //         url: "/css-animations"
    //     },
    //     {
    //         label: "Bounding Box",
    //         url: "/css-animations#bounding-box"
    //     },
    // ]
// }

export default DirectoryURLs
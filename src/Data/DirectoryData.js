import React from 'react';
import Filter from '../Directory/FrontendUI/Filter/Filter';
import Http from '../Directory/FrontendUI/HTTP/Http';
import Slider from '../Directory/FrontendUI/Slider/Slider';
import Tabs from '../Directory/FrontendUI/Tabs/Tabs';

const DirectoryData =  [

        {
            label: "Home",
            id: 'HOME',
            header: 'View Directories',
            subTitle: 'From API requests to User Interface components',
            subPages: false,
            url: "/"
        },
        {
            label: "Frontend UI",
            id: "FRONTEND",
            header: 'Frontend UI',
            subTitle: 'User Interface Components',
            subPages:[
                {
                    label: "Tabs",
                    parentId: "FRONTEND",
                    component: <Tabs/>,
                    url: "/frontend-ui#tabs"
                },
                {
                    label: "Slider",
                    parentId: "FRONTEND",
                    component: <Slider/>,
                    url: "/frontend-ui#slider"
                },
                {
                    label: "Filter",
                    parentId: "FRONTEND",
                    component: <Filter/>,
                    url: "/frontend-ui#filter"
                },
            ],
            url: "/frontend-ui"
        },
        {
            label: "Backend Handling",
            id: "BACKEND",
            header: 'Backend Handling',
            subTitle: 'From API requests fun from various services',
            subPages: [
                {
                    label: "HTTP",
                    parentId: "BACKEND",
                    component: <Http/>,
                    url: "/backend-handling#http"
                },
                {
                    label: "Twitter API",
                    parentId: "BACKEND",
                    url: "/backend-handling#twitter-api"
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
                    url: "/backend-handling#upload-image"
                },
            ],
            url: "/backend-handling"
        },
        {
            label: "CSS Animations",
            id: "CSS",
            header: 'CSS Animations',
            subTitle: 'Hybrid of using Javascript and CSS for fun!',
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

export default DirectoryData
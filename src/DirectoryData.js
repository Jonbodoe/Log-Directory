import React from 'react'
import Tabs from './Directory/Javascript/Tabs/Tabs';
import Slider from './Directory/Javascript/Slider/Slider'
import Filter from './Directory/Javascript/Filter/Filter'

const directoryData = {
    JavascriptCategories: [
        {
            category: "User Interfaces",
            componentList: [
                {
                    component: <Tabs/>,
                    title: 'Tab Display',
                    // published: true
                },
                {
                    component: <Slider/>,
                    title: 'Slider',
                    // published: false
                },
                {
                    component: <Filter/>,
                    title: 'Filter Categories',
                    // published: false
                }
            ]
        },
        {
            category: 'Async Concepts',
            componentList: [
                {
                    component: <></>,
                    title: 'Api Handling',
                    published: false
                },
                {
                    component: <></>,
                    title: 'Layout Loader',
                    published: false
                }
            ]
        },
        {
            category: 'Timers, Dates, Math',
            componentList: []
        },
        {
            category: 'Closures & Prototypes',
            componentList: []
        }
    ],
    CssCategories : [
        {
            category: "CCS Animations",
            componentList: [
                {
                    component: <></>,
                    title: '',
                    published: false
                },
                {
                    component: <></>,
                    title: '',
                    published: false
                }
            ]
        },
    ]
}

export default directoryData;
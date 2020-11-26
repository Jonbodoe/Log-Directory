import React from 'react'
import Tabs from './Directory/Javascript/Tabs/Tabs';
import Slider from './Directory/Javascript/Slider/Slider'
import Filter from './Directory/Javascript/Filter/Filter'
import Http from './Directory/Javascript/HTTP/Http'

// import JavascriptDirectory from './Routes/JavascriptDirectory';
// import CSSDirectory from './Routes/CSSDirectory';
// import UICategory from './Routes/UICategory';

const directoryData = [
    {
        UICategories: [
            {
                component: <Tabs />,
                title: 'Tab Display',
                slug: '/tabs',
            },
            {
                component: <Slider />,
                title: 'Slider',
                slug: '/slider',
            },
            {
                component: <Filter />,
                title: 'Filter Categories',
                slug: '/filter',
            },
            {
                component: <Http/>,
                title: 'Filter Categories',
                slug: '/filter',
            }
        ]
    },
    {
        DataHandling: [
            {
                component: <></>,
                title: 'Layout Loader',
                slug: '/layout-loader',
            },
            {
                component: <></>,
                title: 'Async Handling',
                slug: '/async-handling',
                description: '3 functions pulling data to see which ones appear first, with re-fresh button'
            },
            {
                component: <></>,
                title: '',
                slug: '/filter',
            },
        ]
    }
]

export default directoryData;
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const data = [
    {
        tab: "React Practice",
        title: "Tab 1: Learning React For Dayzz",
        image: require('../../../Images/store.jpg'),
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        tab: 'Proptypes in React',
        title: "Tab 2: Trying to use PropTypes more in Development",
        image: require('../../../Images/road.jpg'),
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        tab: 'React Native',
        title: "Tab 3: Trying React Native slows down my PC alot...",
        image: require('../../../Images/glacier.jpg'),
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
]


const Tabs = () => {
    const [activeTab, setActiveState] = useState(0)
    return (
        <section className="container">
            <div className="row py-3">
                {data.map((list, index) =>
                    <TabLabel
                        key={`${index} + tab`}
                        tab={list.tab}
                        index={index}
                        state={activeTab}
                        handler={setActiveState}
                    />)
                }
            </div>
            <div className="py-3">
                {data.map((list, index) =>
                    <TabContent
                        key={`${index} + content`}
                        content={list}
                        index={index}
                        state={activeTab}
                    />)
                }
            </div>
        </section>
    )
}

const TabLabel = props => {
    return <>
        <div className="p-2">
            <button
                data-tab-id={props.index}
                className={props.index === props.state ? `btn btn-primary` : `btn btn-light`}
                onClick={() => props.handler(props.index)}
            >
                {props.tab}
            </button>
        </div>
    </>
}

const TabContent = props => {
    return <>
        <div className={props.index === props.state ? 'active' : 'not-active'}>
            <div className="d-flex">
                <div className="pr-5 align-self-center">
                    <h2 className="font-weight-bold">{props.content.title}</h2>
                    <p>{props.content.message}</p>
                </div>
                <img className="img-fluid img-med" src={props.content.image} alt="hello" />
            </div>
        </div>
    </>
}

TabLabel.propTypes = {
    tab: PropTypes.string,
    index: PropTypes.number,
    state: PropTypes.number,
    handler: PropTypes.func
}
TabContent.propTypes = {
    content: PropTypes.object,
    index: PropTypes.number,
    state: PropTypes.number,
    handler: PropTypes.func
}





export default Tabs


import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Container from './../../../Components/Container'
import Title from '../../../Components/Title';
import Module from '../../../Components/Module';

const data = [
    {
        tab: "React Practice",
        title: "Learning React For Dayzz",
        image: require('./Images/store.jpg'),
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        tab: 'Proptypes in React',
        title: "Attempt to use PropTypes more",
        image: require('./Images/road.jpg'),
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        tab: 'React Native',
        title: "React Native kills my CPU",
        image: require('./Images/glacier.jpg'),
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
]


const Tabs = () => {
    const [activeTab, setActiveState] = useState(0)
    return (
        <>
            <Title title={`Tabs`} />
            <Module>
                <div>
                    <div className="row">
                        {
                            data.map((list, index) =>
                                <TabLabel
                                    key={`${index} + tab`}
                                    tab={list.tab}
                                    index={index}
                                    state={activeTab}
                                    handler={setActiveState}
                                />)
                        }
                    </div>
                    {
                        data.map((list, index) =>
                            <TabContent
                                key={`${index} + content`}
                                content={list}
                                index={index}
                                state={activeTab}
                            />)
                    }
                </div>
            </Module>
        </>
    )
}

const TabLabel = props => {
    return <div className="p-2">
        <button
            data-tab-id={props.index}
            className={props.index === props.state ? `btn btn-success` : `btn btn-light`}
            onClick={() => props.handler(props.index)}
        >
            {props.tab}
        </button>
    </div>
}

const TabContent = props => {
    return <>
        <div className={props.index === props.state ? 'active' : 'not-active'}>
            <div className="d-flex">
                <div className="pr-5 align-self-center">
                    <h3 className="font-weight-bold">{props.content.title}</h3>
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


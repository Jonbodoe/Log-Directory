import React from 'react';

const Container = (props) => {
    return <div className="container-fluid container-content">
        <div className="row">
            {props.children}
        </div>
    </div>
}
export default Container
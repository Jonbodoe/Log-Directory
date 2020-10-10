import React from 'react';

const Container = (props) => {
    return <div className="container py-4">
        <div className="d-flex">
            {props.children}
        </div>
    </div>
}
export default Container
import React from 'react';

const Title = (props) => {
    return <div className="pt-5" id={props.id}>
        <h2 className="pt-4 pb-3 text-secondary font-weight-bold h4 border-top">
            {props.title} 
        </h2>
    </div>
}

export default Title
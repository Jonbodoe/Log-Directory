import React from 'react';

const Title = (props) => {
    return <div className="pt-5 sticky-top bg-white" id={props.id}>
        <h2 className="pb-3 text-secondary font-weight-bold border-bottom h4">
            {props.title} 
        </h2>
    </div>
}

export default Title
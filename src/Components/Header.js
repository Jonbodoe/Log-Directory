import React from 'react';

const Header = (props) => {
    return <div className="pt-5 pb-3">
        <h1 className="text-dark font-weight-bold">
            {props.title}
        </h1>
        <p className="text-success h4">{props.subTitle || false}</p>
    </div>
}

export default Header
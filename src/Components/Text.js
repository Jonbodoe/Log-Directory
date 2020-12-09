import React from 'react';

const Text = (props) => {
    return <div className="py-3 text-secondary">
            {props.children}
        </div>
}

export default Text
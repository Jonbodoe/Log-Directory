import React from 'react';
import directoryData from '../DirectoryData'

const Navigation = () => {
    const jsConcepts = directoryData.JavascriptCategories[0].componentList;
    console.log(jsConcepts)
    return <>
        <nav className="nav navbar-light fixed-top p-3">
            <div className="navbar-brand font-weight-bold">Log</div>
        </nav>
        <div>
            {/* {
                jsConcepts.map(data => data.component
                )
            } */}
        </div>

    </>
}

export default Navigation
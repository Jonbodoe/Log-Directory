import React, { useState } from 'react';
import Module from '../../../Components/Module';
// import Container from '../../../Components/Container';
// import Container from '../../../Components/Container';
import Title from '../../../Components/Title';
// import Container from '../../../Components';
import data from './Data';

const Filter = () => {
    const [selected, setSelected] = useState([])
    return <>
                <Title title={'Filter'} />
        <Module>
            <div className="d-flex">
                <div className="h-100 pr-md-5">
                    <RadioInputs />
                </div>
                <div className="">
                    <ImageTotal />
                    <GetImages />
                </div>
            </div>
        </Module>
    </>
}
const RadioInputs = (props) => {
    const categories = getCategories()
    return <>
        <p className="h4 font-weight-bold">Filter</p>
        {
            categories.map(category =>
                <div key={category} className="form-check">
                    <input className="form-check-input" type="checkbox" name={category} />
                    <label className="form-check-label" >
                        {category}
                    </label>
                </div>
            )
        }
    </>
}

const getCategories = () => {
    const newArray = []
    data.map(img => newArray.push(img.category))
    return [...new Set(newArray)]
}

const GetImages = (props) => {
    return <>
        {
            data.map(img =>
                <img className="filter-card m-1" src={img.src} alt="Card cap" />
            )
        }
    </>
}
const ImageTotal = (props) => {
    return <>
        <p className="text-success h4 pb-3">Results {data.length}</p>
    </>
}
// console.log(getCategories())

// State
// --- Selected
// ---
// Create categories
// Cards
// Radio Inputs
// Pills
// Event callbacks


export default Filter
import React, { useState } from 'react';
import Module from '../../../Components/Module';
// import Container from '../../../Components/Container';
// import Container from '../../../Components/Container';
import Title from '../../../Components/Title';
// import Container from '../../../Components';
import data from './Data';


const getCategories = () => {
    const newArray = []
    data.forEach(img => newArray.push(img.category))
    return [...new Set(newArray)]
}

const isChecked = (state, category) => {
    return state.indexOf(category) >= 0 ? true : false
}

const filterHandler = (category, handler, state) => {
    if (isChecked(state, category)) {
        return handler(state.filter(item => item !== category))
    }
    handler(state.concat(category))
}

const Filter = () => {
    const [selected, setSelected] = useState([
        "Flim", "Architecture"
    ])
    console.log(selected)
    return <>
        <Title title={'Filter'} />
        <Module>
            <div className="d-flex">
                <div className="h-100 pr-md-5">
                    <fieldset>
                        <RadioInputs handler={setSelected} state={selected} />
                    </fieldset>
                </div>
                <div className="">
                    <FilterButtons handler={setSelected} state={selected} />
                    {/* <ImageTotal /> */}
                    <GetImages state={selected} data={data} />
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
                    <input
                        className="form-check-input"
                        type="checkbox" value={`${category}`}
                        checked={isChecked(props.state, category)}
                        onChange={() => filterHandler(category, props.handler, props.state)}
                    />
                    <label className="form-check-label">
                        {category}
                    </label>
                </div>
            )
        }
    </>
}
const FilterButtons = (props) => {
    return <div className="pb-3">
        {
            props.state.map(category =>
                <button
                    key={category}
                    className="btn btn-success mx-1"
                    value={category}
                    onClick={() => filterHandler(category, props.handler, props.state)}
                >
                    {category}
                    <i className="fas fa-times ml-2"></i>
                </button>
            )
        }
    </div>
}

const GetImages = (props) => {
    const filteredList = props.data.filter(img => props.state.includes(img.category))
    return <>
        {
            filteredList.length > 0 ?
            filteredList.map(img =>
                <img key={img.src} className="filter-card m-1" src={img.src} alt="Card cap" />
            )
            :
            props.data.map(img =>
                <img key={img.src} className="filter-card m-1" src={img.src} alt="Card cap" />
            )
        }
    </>
}
// const ImageTotal = (props) => {
//     return <>
//         <p className="text-success h4 pb-3">Results {data.length}</p>
//     </>
// }



// State 
// --- Selected filter if is in state list
// Event
// --- Add or remove from state list based on selected filter function ^^^
// Create categories
// Cards
// Radio Inputs
// Pills
// Event callbacks


export default Filter
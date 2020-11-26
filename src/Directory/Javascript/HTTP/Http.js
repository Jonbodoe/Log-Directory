import React, { useEffect, useState } from 'react';
import Title from '../../../Components/Title';
// import PropTypes from 'prop-types';
const api = "https://api.open5e.com/monsters/?format=json"
const Http = () => {
    const [monsterList, setMonsterList] = useState([])
    useEffect(() => {
        fetch(api)
            .then(result => result.json())
            // If getting a response, use .json() to convert, if you only receive only receieve response object
            .then(
                (res) => {
                    setMonsterList(res.results)
                }
            )
            .catch(error => {
                return error.message

            });
    }, [])
    // console.log(monsterList)
    return (
        <>
            <Title title={`Table Data`} />
            <table className="table">
                {/* <TableRow/> */}
                <thead>
                    <tr>
                        <th className="text-success" scope="col">Name</th>
                        <th className="text-success" scope="col">Size</th>
                        <th className="text-success" scope="col">Type</th>
                        <th className="text-success" scope="col">Alignment</th>
                    </tr>
                </thead>
                {/* <tbody> */}
                {
                    monsterList.length ?
                        monsterList.map((item, index) => {
                            return <tbody key={index}>
                                <TableRow content={item} />
                            </tbody>
                        })
                        :
                        <></>
                }
                {/* </tbody> */}
            </table>
        </>
    )
}
const TableRow = (props) => {
    return <>
        <tr>
            <th scope="row">{props.content.name}</th>
            <td>{props.content.size}</td>
            <td>{props.content.type}</td>
            <td>{props.content.alignment}</td>
        </tr>
    </>
}
// const TableHead = (props) => {
//     return <div>Head</div>
// }
// const Tabledata = (props) => {
//     return <div>data</div>
// }

export default Http
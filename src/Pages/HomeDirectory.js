import React from 'react'
// import Title from '../Components/Title'
import Header from '../Components/Header'
import {
    Link
} from "react-router-dom";
// import Text from '../Components/Text'
import photoWidget1 from './../Images/WebAssets-01.png';
import photoWidget2 from './../Images/WebAssets-02.png'
import photoWidget3 from './../Images/WebAssets-03.png'


const WidgetData = [
    {
        img: photoWidget1,
        url: "/frontend-ui",
        alt: 'graphic for frontend development',
        text: "Frontend UI"
    },
    {
        img: photoWidget2,
        url: "/backend-handling",
        alt: 'graphic for backend development',
        text: "Backend Handling"
    },
    {
        img: photoWidget3,
        url: "/css-animation",
        alt: 'graphic for CSS development',
        text: "CSS Animation"
    },
]

const HomeDirectory = () => {
    return <>
        {/* <div class="container"> */}
        <div id="home-page"></div>
        <Header title={`View Directories`} subTitle={`From API requests to User Interface components`} />
        <div className="row d-flex justify-content-around py-3">
            {
                WidgetData.map(widget =>
                    <div className="col-md-4">
                        <div className="directory-cards">
                            <Link className="text-dark" to={widget.url}>
                                <div className="m-2 shadow">
                                    <img className="img-fluid" src={widget.img} alt={widget.alt} />
                                    <p className="text-center h4 font-weight-bold pt-2 p-3 ">{widget.text}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
        {/* </div> */}
    </>

}

export default HomeDirectory
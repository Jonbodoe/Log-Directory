import React, { useState } from 'react';
// import Container from '../../../Components/Container';
import Title from '../../../Components/Title';
// import PropTypes from 'prop-types';
const data = [
    {
        src: require('./Images/copenhagen.jpg'),
        alt: "A street in Copenhagen Denmark"
    },
    {
        src: require('./Images/sunsethighway.jpg'),
        alt: "A empty highway during sunset"
    },
    {
        src: require('./Images/streetlight.jpg'),
        alt: "A single streetlight in the night"
    },
    {
        src: require('./Images/alleyway.jpg'),
        alt: "A alleyway somewhere in one of the East Coast cities"
    },
]

// Make components for common elements (e.g. Buttons with Icons, Heading(H1,H2))
const Slider = () => {
    const [slide, setSlide] = useState(0);
    const onSetSlide = (num) => {
        setSlide(slide + num)
    }
    return <>
        <Title title={`Slider`} />
        <div className="d-flex">

            <div className="align-self-center">
                <button className="btn btn-success m-5"
                    disabled={slide > 0 ? false : true}
                    onClick={() => onSetSlide(-1)}
                >
                    <i className="fas fa-chevron-left p-2"></i>
                </button>
            </div>
            <div>
                <CurrentImage state={slide} />
                <div className="d-flex justify-content-around">
                {
                    data.map((img, index) =>
                        <LightBoxImages key={index} img={img} index={index} state={slide} handler={setSlide} />
                    )
                }
                </div>
            </div>
            <div className="align-self-center">
                <button className="btn btn-success m-5"
                    disabled={slide < data.length - 1 ? false : true}
                    onClick={() => onSetSlide(+1)}
                >
                    <i className="fas fa-chevron-right p-2"></i>
                </button>
            </div>
        </div>
    </>
}

const CurrentImage = (props) => {
    const filteredImage = data.find((src, index) => index === props.state)
    return <div>
        <img className="img-fluid p-4" src={filteredImage.src} alt={filteredImage.alt} />
    </div>
}

const LightBoxImages = (props) => {
    return <button
        className={props.state !== props.index ? `btn btn-light` : `btn btn-success`}
        onClick={() => props.handler(props.index)}
    >
        <img
            className={props.state !== props.index ? `thumbnail img-opacity` : `thumbnail`}
            src={props.img.src}
            alt={props.img.alt}
        />
    </button>
}



// send direction + index to function change

export default Slider
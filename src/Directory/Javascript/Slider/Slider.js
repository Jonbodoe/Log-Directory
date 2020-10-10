import React, { useState } from 'react';
import Container from '../../../Components/Container';
// import PropTypes from 'prop-types';
const data = [
    {
        src: require('../../../Images/copenhagen.jpg'),
        alt: "A street in Copenhagen Denmark"
    },
    {
        src: require('../../../Images/sunsethighway.jpg'),
        alt: "A empty highway during sunset"
    },
    {
        src: require('../../../Images/streetlight.jpg'),
        alt: "A single streetlight in the night"
    },
    {
        src: require('../../../Images/alleyway2.jpg'),
        alt: "A alleyway somewhere in one of the East Coast cities"
    },
]

// Make components for common elements (e.g. Buttons with Icons, Heading(H1,H2))
const Slider = () => {
    const [slide, setSlide] = useState(0);
    const onSetSlide = (num) => {
        setSlide(slide + num)
    }
    return <Container>
        <div className="align-self-center">
            <button className="btn btn-primary m-4"
                disabled={slide > 0 ? false : true}
                onClick={() => onSetSlide(-1)}
            >
                <i className="fas fa-chevron-left p-2"></i>
            </button>
        </div>
        <CurrentImage state={slide} />
        <div className="align-self-center">
            <button className="btn btn-primary m-4"
                disabled={slide < data.length - 1 ? false : true}
                onClick={() => onSetSlide(+1)}
            >
                <i className="fas fa-chevron-right p-2"></i>
            </button>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
            {
                data.map((img, index) =>
                    <LightBoxImages key={index} img={img} index={index} state={slide} handler={setSlide} />
                )
            }
        </div>
    </Container>
}

const CurrentImage = (props) => {
    const filteredImage = data.find((src, index) => index === props.state)
    return <div>
        <img className="img-main" src={filteredImage.src} alt={filteredImage.alt} />
    </div>
}

const LightBoxImages = (props) => {
    return <button
        className={props.state !== props.index ? `btn btn-light` : `btn btn-primary`}
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
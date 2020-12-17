import React from 'react';
import Header from '../Components/Header';
import CourtesyNav from '../Components/CourtesyNav';
import Container from '../Components/Container';

const CSSDirectory = (props) => {
    return <>
        <Container>
            <CourtesyNav />
            <div className="col-md-10 p-5">
                <Header title={`CSS Animations`} subTitle={`Hybrid of using Javascript and CSS for fun!`} />
            </div>
        </Container>
    </>
}

export default CSSDirectory
import React from 'react';
import Header from '../Components/Header';
import CourtesyNav from '../Components/CourtesyNav';
import Container from '../Components/Container';

const BackendHandling = (props) => {
    return <>
        <Container>
            <CourtesyNav />
            <div className="col-md-10 p-5">
                <Header title={`Backend Handling`} subTitle={`From API requests fun from various services`} />
            </div>
        </Container>
    </>
};

export default BackendHandling;
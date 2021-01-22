import React from 'react';
import Header from '../Components/Header';
import CourtesyNav from '../Components/CourtesyNav';
import Container from '../Components/Container';
import DirectoryData from '../Data/DirectoryData';

const CategoryPage = (props) => {
    const getLinks = DirectoryData.filter(data => data.id === props.id);
    // Type checking the category based on the passed props id
    const categoryData = Object.assign({}, ...getLinks);
    // Converts the filtered DirectoryData from a returned array into an object
    return <>
        <Container>
            <CourtesyNav />
            <div className="col-md-10 p-5">
                <Header title={props.header} subTitle={props.subTitle} />
                {
                    categoryData.subPages.length ? categoryData.subPages.map(category => category.component) : false
                }
            </div>
        </Container>
    </>
};

export default CategoryPage;
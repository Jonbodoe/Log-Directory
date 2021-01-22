import React, {useState} from 'react';
import Module from '../../../Components/Module';
import Title from '../../../Components/Title';


const data = [
    {
        src: require("../Filter/Images/film1.jpg"),
        alt: "Film one",
    },
    {
        src: require("../Filter/Images/nature2.jpg"),
        alt: "Nature Two",
    },
    {
        src: require("../Filter/Images/food2.jpg"),
        alt: "Food Two",
    },
    {
        src: require("../Filter/Images/architecture3.jpg"),
        alt: "Architecture three",
    },
    {
        src: require("../Filter/Images/nature5.jpg"),
        alt: "Nature Five",
    },
    {
        src: require("../Filter/Images/architecture4.jpg"),
        alt: "Architecture four",
    },
    {
        src: require("../Filter/Images/food3.jpg"),
        alt: "Food Three",
    },
    {
        src: require("../Filter/Images/interior1.jpg"),
        alt: "Interior One",
    },
];

// const roundUpNumber = (num) => {
//     console.log(num)
// }

const spliceImageList = (data) => {
    // roundUpNumber(Math.floor(data.length % 3))
    // let numberOfArrays = Math.floor(data.length % 3)
    // const newArray = [];
    let imgColumn = 3
    // const numbers = [0,3,6];
    return data.forEach((img, i) => {
        i % imgColumn === 0? console.log(img.src,'hello') : console.log(img.src,'no')

        // Maybe have a variable that is T / F when it hits 0, change the boolean to create a new variable
    })


}

spliceImageList(data);


const Carousel = () => {
    // const initialData = data
    const [imageList, setImageList] = useState(data)
    console.log(imageList)
    // const seedingData = () => {
    //     console.log(imageList)
    //     // setImageList(!imageList.length ? [...initialData] : imageList)
    // }

    // useEffect(() => {
    //     // function seeding(data){
    //         if (!imageList.length) {
    //             setImageList(data)
    //         }
    //     // }
    //     // // console.log(imageList)
    //     // seeding(imageList)
    // },[imageList]);

    // setImageList(!imageList.length ? [...initialData] : imageList)
    return <>
        <Title title={'Carousel'} id={'carousel'} />
        <Module>
            <div className="d-flex">
                <ImageRow state={imageList}  handler={setImageList}/>
            </div>
        </Module>
    </>
}

const imageChanger = (increment) => {
    // console.log(data, increment)
    // if (increment === +3) {
    //     console.log('helloooooo')
    // } 
    

    // const initialArray = data
    // console.log(initialArray)

    // let increment = 3;
    // let intialCount = 0;
    // let addedCount = intialCount + increment
    // let imageList = [];
    // // console.log(props)
    // props.forEach((img, i) => {
    //     if (imageList.length !== increment) {
    //         console.log(img.src)
    //         return imageList.push(img)
    //     } else {
    //         console.log(img.src, "not good")
    //     }
    // })
    // console.log(imageList)
    // const splicedImages = initialArray.splice(0, 3);
    // if (!splicedImages.length) {
    //     console.log("EMPTY")
    //     // imageChanger()
    //     // initialArray = data;
    // } else {
    //     console.log(splicedImages)
    // }
    
}

const ImageRow = (props) => {
    // imageChanger(props.data)

    return <div className="overflow-none">
        <div className="row">
            <button className="btn btn-primary m-1" onClick={() => imageChanger()}>PREV</button>
            <button className="btn btn-primary m-1" onClick={() => imageChanger()}>NEXT</button>
        </div>
        
        {/* <img src={props.data.src} alt={props.data.alt}/>
        <img src={props.data.src} alt={props.data.alt}/>
        <img src={props.data.src} alt={props.data.alt}/> */}
    </div>;
}


// Section for the images
// Image by 3's
// 
// 
// Section for each the arrows
// Handler to to increment or decrement

// Splice by 3's and concat into the newarray, 
// Figure out how to call the Splice function the divided by the number of 3. 



export default Carousel;
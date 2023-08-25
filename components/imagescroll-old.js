// import * as React from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import { useState, useEffect } from "react";

// const twData = [
//     {
//         img: "./images/twthumb1.png",
//         title: "TW Thumbnail 1",
//     },
//     {
//         img: "./images/twthumb2.png",
//         title: "TW Thumbnail 2",
//     },
// ];

// const dgData = [
//     {
//         img: "./images/dgthumb1.png",
//         title: "DG Thumbnail 1",
//     },
//     {
//         img: "./images/dgthumb2.png",
//         title: "DG Thumbnail 2",
//     },
// ];

// function ImageScroll(props) {
//     const [dataSource, setDataSource] = useState([]);

//     useEffect(() => {
//         if (props.title == "TW") {
//             setDataSource(twData);
//         } else if (props.title == "DuckGod") {
//             setDataSource(dgData);
//         }
//     }, [props.title]);

//     return (
        // <ImageList
        //     sx={{ marginTop: "12px", height: "240px" }}
        //     cols={2}
        //     rowHeight={164}
        // >
        //     {dataSource.map((item) => (
        //         <ImageListItem key={item.img}>
        //             <img
        //                 src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        //                 srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        //                 alt={item.title}
        //                 loading="lazy"
        //             />
        //         </ImageListItem>
        //     ))}
        // </ImageList>
//     );
// }

// export default ImageScroll;

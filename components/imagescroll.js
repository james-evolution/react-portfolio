import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Button } from "@mui/material";

function ImageScroll(props) {
    const [open, setOpen] = useState(false);
    const [thumbnailDataSource, setThumbnailDataSource] = useState([]);
    const [lightboxDataSource, setLightboxDataSource] = useState([]);

    function openLightbox() {
        setOpen(true);
        console.log("Opening lightbox.");
    }

    useEffect(() => {
        if (props.title == "TW") {
            setLightboxDataSource(twData);
            setThumbnailDataSource(twData2);
        } else if (props.title == "DuckGod") {
            setLightboxDataSource(dgData);
            setThumbnailDataSource(dgData2);
        }
    }, [props.title]);

    return (
        <>
            <div onClick={() => openLightbox}>
                <ImageList
                    sx={{ marginTop: "12px", height: "240px"}}
                    cols={2}
                    rowHeight={164}
                    onClick={() => setOpen(true)}
                >
                    {thumbnailDataSource.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={lightboxDataSource}
                />
            </div>
        </>
    );
}

export default ImageScroll;

const twData = [
    {
        src: "./images/twthumb1.png",
    },
    {
        src: "./images/twthumb2.png",
    },
];

const dgData = [
    {
        src: "./images/dgthumb1.png",
    },
    {
        src: "./images/dgthumb2.png",
    },
];

const twData2 = [
    {
        img: "./images/twthumb1.png",
        title: "TW Thumbnail 1",
    },
    {
        img: "./images/twthumb2.png",
        title: "TW Thumbnail 2",
    },
];

const dgData2 = [
    {
        img: "./images/dgthumb1.png",
        title: "DG Thumbnail 1",
    },
    {
        img: "./images/dgthumb2.png",
        title: "DG Thumbnail 2",
    },
];

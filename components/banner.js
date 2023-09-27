"use client"; // This is a client component.

import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import classes from "./styles/gridcontainer.module.css";
import Carousel from "react-material-ui-carousel";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark" ? "rgba(0,0,0,0.33)" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
    color: theme.palette.text.secondary,
}));

const CustomCarousel = styled(Carousel)(({ theme }) => ({
    marginTop: "-8px",
    height: "480px",
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const slides = ["../images/post.jpg", "../images/spiske.jpg"];

function Banner() {
    return (
        <>
            <CustomCarousel>
                {slides?.map((slide, index) => {
                    return (
                        <div
                            key={index}
                            className={classes.slideImage}
                            style={{
                                backgroundImage: `url(${slide})`,
                            }}
                        >
                            <div className={classes.introContainer}>
                                <h1 style={{ margin: "auto" }}>
                                    Jeremy Alkire
                                </h1>
                                <h2
                                    style={{
                                        margin: "auto",
                                        marginTop: "12px",
                                        marginBottom: "12px",
                                    }}
                                >
                                    Full-Stack Software Developer
                                </h2>
                                <Stack spacing={1} alignItems="center">
                                    <Stack direction="row" spacing={1}>
                                        <Chip
                                            label="Java"
                                            color="success"
                                            style={{
                                                backgroundColor: "#0a444c",
                                                color: "white",
                                            }}
                                        />
                                        <Chip
                                            label="JavaScript"
                                            color="success"
                                            style={{
                                                backgroundColor: "#bc8f3a",
                                                color: "white",
                                            }}
                                        />
                                        <Chip
                                            label="Python"
                                            color="success"
                                            style={{
                                                backgroundColor: "green",
                                                color: "white",
                                            }}
                                        />
                                        <Chip
                                            label="C#"
                                            color="success"
                                            variant="outlined"
                                            style={{
                                                backgroundColor: "#0a444c",
                                                borderColor: "#2631b5",
                                                color: "white",
                                            }}
                                        />
                                    </Stack>
                                    <Stack direction="row" spacing={1}>
                                        <Chip
                                            label="Spring"
                                            color="success"
                                            variant="outlined"
                                            style={{
                                                backgroundColor: "#24d830",
                                                borderColor: "#24d830",
                                                color: "black",
                                            }}
                                        />
                                        <Chip
                                            label="React.js"
                                            color="success"
                                            variant="outlined"
                                            style={{
                                                backgroundColor: "#2bc6b7",
                                                borderColor: "#2bc6b7",
                                                color: "black",
                                            }}
                                        />
                                        <Chip
                                            label="Next.js"
                                            color="success"
                                            variant="outlined"
                                            style={{
                                                backgroundColor: "#ef3774",
                                                borderColor: "#ef3774",
                                                color: "white",
                                            }}
                                        />
                                           <Chip
                                            label="ASP.NET"
                                            color="success"
                                            variant="outlined"
                                            style={{
                                                backgroundColor: "#0a444c",
                                                borderColor: "#2631b5",
                                                color: "white",
                                            }}
                                        />
                                    </Stack>
                                </Stack>
                            </div>
                        </div>
                    );
                })}
            </CustomCarousel>
        </>
    );
}

export default Banner;

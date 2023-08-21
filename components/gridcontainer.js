"use client"; // This is a client component.

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import classes from "./gridcontainer.module.css";
import Carousel from "react-material-ui-carousel";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import About from "./about";

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

function GridContainer() {
    return (
        <Box className={classes.gridbox} sx={{ flexGrow: 1, height: "100vw" }}>
            <Grid container spacing={2}>
                <Grid className={classes.carouselGrid} xs={12}>
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
                                                        backgroundColor:
                                                            "#0a444c",
                                                        color: "white",
                                                    }}
                                                />
                                                <Chip
                                                    label="JavaScript"
                                                    color="success"
                                                    style={{
                                                        backgroundColor:
                                                            "#bc8f3a",
                                                        color: "white",
                                                    }}
                                                />
                                                <Chip
                                                    label="Python"
                                                    color="success"
                                                    style={{
                                                        backgroundColor:
                                                            "green",
                                                        color: "white",
                                                    }}
                                                />
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Chip
                                                    label="Spring Boot"
                                                    color="success"
                                                    variant="outlined"
                                                    style={{
                                                        borderColor: "#24d830",
                                                        color: "#24d830",
                                                    }}
                                                />
                                                <Chip
                                                    label="React.js"
                                                    color="success"
                                                    variant="outlined"
                                                    style={{
                                                        borderColor: "cyan",
                                                        color: "cyan",
                                                    }}
                                                />
                                            </Stack>
                                        </Stack>
                                    </div>
                                </div>
                            );
                        })}
                    </CustomCarousel>
                </Grid>

                <Grid className={classes.about} xs={12}>
                    <About id="about"/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default GridContainer;

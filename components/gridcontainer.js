"use client"; // This is a client component.

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import classes from "./gridcontainer.module.css";
import Carousel from "react-material-ui-carousel";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
    color: theme.palette.text.secondary,
}));

const CustomCarousel = styled(Carousel)(({ theme }) => ({
    height: "300px",
}));

const slides = [
    "../images/post.jpg",
    "../images/spiske.jpg",
    "../images/santos.jpg",
];

function GridContainer() {
    return (
        <Box sx={{ flexGrow: 1, height: "100vw"}}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Item>
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
                                        <h1 style={{ margin: "auto" }}>
                                            Jeremy Alkire
                                        </h1>
                                    </div>
                                );
                            })}
                        </CustomCarousel>
                    </Item>
                </Grid>

                <Grid xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid xs={4}>
                    <Item>xs=4</Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default GridContainer;

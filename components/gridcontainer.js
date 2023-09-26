"use client"; // This is a client component.

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import classes from "./styles/gridcontainer.module.css";
import About from "./about";
import Projects from "./projects";
import { Divider, Typography } from "@mui/material";
import Banner from "./banner";
import Contact from "./contact";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

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

function GridContainer() {
    return (
        <Box className={classes.gridbox} sx={{ flexGrow: 1, height: "100vw" }}>
            <Grid container spacing={2}>
                {/* Carousel */}
                <Grid className={classes.carouselGrid} xs={12}>
                    <Banner />
                </Grid>

                {/* About (Fluencies | About Me | Technologies) */}
                <Grid className={classes.about} xs={12}>
                    <About id="About" />
                </Grid>

                {/* Projects  */}
                <Grid
                    className={classes.projects}
                    xs={12}
                    sx={{ marginTop: "32px" }}
                >
                    <Divider id="#Projects" sx={{ color: "white" }}>
                        <Typography variant="h4" component="h2">
                            Projects
                        </Typography>
                    </Divider>

                    <Grid className={classes.projects} xs={12}>
                        <Projects id="Projects" />
                    </Grid>

                    <Grid className={classes.projects} xs={12} sx={{textAlign: "center", paddingTop: "12px", paddingBottom: "12px"}}>
                        <a href="/Jeremy_Alkire_Resume_2023.pdf" download>
                            <Button
                                component="label"
                                variant="contained"
                                startIcon={<DownloadIcon />}
                            >
                                Download Resume
                            </Button>
                        </a>
                    </Grid>

                    <Divider
                        id="Contact"
                        sx={{ marginTop: "24px", color: "white" }}
                    >
                        <Typography variant="h4" component="h2">
                            Contact Information
                        </Typography>
                    </Divider>

                    <Grid className={classes.projects} xs={12}>
                        <Contact />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default GridContainer;

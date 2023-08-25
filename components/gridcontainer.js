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
import Contact from "../pages/contact";

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
                    <Divider sx={{ color: "white" }}>
                        <Typography variant="h4" component="h2">
                            Projects
                        </Typography>
                    </Divider>

                    <Grid className={classes.projects} xs={12}>
                        <Projects id="Projects" />
                    </Grid>

                    <Divider sx={{ marginTop: "24px", color: "white" }}>
                        <Typography variant="h4" component="h2">
                            Contact Information
                        </Typography>
                    </Divider>

                    <Grid className={classes.projects} xs={12}>
                        <Contact/>
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    );
}

export default GridContainer;

"use client"; // This is a client component.

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import classes from "./about.module.css";
import Carousel from "react-material-ui-carousel";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import Languages from "./languages";
import Typography from "@mui/material/Typography";
import Technologies from "./technologies";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "rgba(0,0,0,0.5)" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "20px",
    marginLeft: "5px",
    marginRight: "5px",
    color: theme.palette.text.secondary,
    boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
}));

function About() {
    return (
        <Grid className={classes.aboutGrid} container spacing={2}>
            {/* Languages */}
            <Grid xs={4}>
                <Item>
                    <Typography variant="h4" component="h2" sx={{marginBottom: "10px"}}>
                        Fluencies
                    </Typography>
                    <Divider>
                        <CodeIcon />
                    </Divider>
                    <Languages />
                </Item>
            </Grid>

            {/* Technologies */}
            <Grid xs={4}>
                <Item>
                <Typography variant="h4" component="h2" sx={{marginBottom: "10px"}}>
                        Technologies
                    </Typography>
                    <Divider>
                        <CodeIcon />
                    </Divider>
                    <Technologies/>
                </Item>
            </Grid>

            {/* ? */}
            <Grid xs={4}>
                <Item>
                <Typography variant="h4" component="h2" sx={{marginBottom: "10px"}}>
                        Software Developed
                    </Typography>
                    <Divider>
                        <CodeIcon />
                    </Divider>
                </Item>
            </Grid>
        </Grid>
    );
}

export default About;
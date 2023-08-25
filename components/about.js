"use client"; // This is a client component.

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import classes from "./styles/about.module.css";
import { Divider } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import Typography from "@mui/material/Typography";
import Technologies from "./technologies";
import Fluencies from "./fluencies";
import Link from '@mui/material/Link';

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
    boxShadow:
        "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
}));

function About() {
    return (
        <Grid className={classes.aboutGrid} container spacing={2}>
            {/* Languages */}
            <Grid xs={4}>
                <Item>
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{ marginBottom: "10px" }}
                    >
                        Fluencies
                    </Typography>
                    <Divider>
                        <CodeIcon />
                    </Divider>
                    <Fluencies />
                </Item>
            </Grid>

            {/* About Me */}
            <Grid xs={4}>
                <Item>
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{ marginBottom: "10px" }}
                    >
                        About Me
                    </Typography>
                    <Divider>
                        <CodeIcon />
                    </Divider>
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ marginTop: "18px" }}
                    >
                        Hello! My name is Jeremy.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ marginTop: "18px" }}
                    >
                        Welcome to my site. I built this with React and Material UI. It's <Link target="_blank" rel="noopener" href="https://github.com/james-evolution/react-portfolio">open-source!</Link>
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ marginTop: "18px" }}
                    >
                        Son to a software architect, my
                        introduction to the world of programming began at just 9
                        years old. I've been programming for twenty years,
                        working professionally as a software engineer for two,
                        and teaching others for four.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ marginTop: "24px" }}
                    >
                        I've written software for a variety of companies and
                        clients (including celebrities), worked with
                        multi-million-dollar projects, and built full-stack web
                        applications in both Java (with Spring) and JavaScript
                        (with React/Next.js). I’ve also developed and deployed
                        security software to protect my clients from hackers,
                        scammers, and other cybercriminals in the crypto & web3
                        industry.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ marginTop: "24px" }}
                    >
                        The websites I’ve built have been released to and used
                        by tens of thousands of users and have handled
                        real-world financial transactions on the Ethereum
                        network.
                    </Typography>
                </Item>
            </Grid>

            {/* Technologies */}
            <Grid xs={4}>
                <Item>
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{ marginBottom: "10px" }}
                    >
                        Technologies
                    </Typography>
                    <Divider>
                        <CodeIcon />
                    </Divider>
                    <Technologies />
                </Item>
            </Grid>
        </Grid>
    );
}

export default About;

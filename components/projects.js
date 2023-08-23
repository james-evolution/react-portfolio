"use client"; // This is a client component.

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import classes from "./styles/about.module.css";
import Carousel from "react-material-ui-carousel";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import Languages from "./fluencies";
import Typography from "@mui/material/Typography";
import Technologies from "./technologies";
import Fluencies from "./fluencies";
import Project from "./project";

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
    borderStyle: "none",
    borderWidth: "0px",
}));

function Projects() {
    return (
        <Grid container spacing={2}>
            {/* Projects */}
            <Grid xs={12}>
                <Grid container spacing={2} sx={{ marginTop: "12px" }}>
                    <Project
                        title="DuckGod"
                        url="https://youtu.be/xHjXRll6DlE"
                        descriptions={[
                            "A full-stack, token-gated web3 application that interacted with crypto wallets on the Ethereum network and allowed users to interacted with smart contracts.",
                            "Users were able to mint non-fungible tokens directly through the application, and it would run checks on whether they had these tokens to determine if they were authorized to proceed further into the experience.", 
                            "The application used numerous third-party libraries, frameworks, and a custom-built API."
                        ]}
                    />
                    <Project
                        title="Redacted"
                        url="https://youtu.be/xHjXRll6DlE"
                        descriptions={["Line 1", "Line 2", "Line 3"]}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Projects;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import classes from "./styles/project.module.css";
import Carousel from "react-material-ui-carousel";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "rgba(0,0,0,0)" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "20px",
    marginLeft: "32px",
    marginRight: "32px",
    color: theme.palette.text.secondary,
    boxShadow:
        "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
}));

const videoStyle = {
    margin: "auto",
    marginTop: "12px",
    marginBottom: "12px",
};

function Project(props) {
    const [descriptions, setDescriptions] = useState([]);

    useEffect(() => {
        setDescriptions(props.descriptions);
    }, [props.descriptions]);

    return (
        <Grid xs={6}>
            <Item>
                {/* Project Title */}
                <Typography variant="h4" component="h2">
                    {props.title}
                </Typography>
                {/* Project Video */}
                <ReactPlayer
                    controls="true"
                    width="80%"
                    style={videoStyle}
                    className={classes.video}
                    url={props.url}
                />
                {/* Project Description */}
                {descriptions.map((desc) => {
                    return (
                        <Typography variant="body1" gutterBottom>
                            {desc}
                        </Typography>
                    );
                })}
            </Item>
        </Grid>
    );
}

export default Project;

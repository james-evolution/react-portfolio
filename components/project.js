import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import classes from "./styles/project.module.css";
import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Features from "./features";
import StackList from "./stacklist";

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

const StyledLink = styled(Link)(() => ({
    margin: "auto",
    marginLeft: "12px",
}));

const videoStyle = {
    margin: "auto",
    marginTop: "24px",
    marginBottom: "48px",
};

// const Alert = React.forwardRef(function Alert(props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//   });

function Project(props) {
    const [descriptions, setDescriptions] = useState([]);
    const [stack, setStack] = useState([]);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        setDescriptions(props.descriptions);
        setStack(props.stack);
    }, [props.descriptions, props.stack]);

    return (
        <Grid xs={6}>
            <Item>
                {/* Project Title */}
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{ marginBottom: "12px" }}
                >
                    {props.title}
                </Typography>
                {/* Website Link */}
                <StyledLink
                    href={props.website}
                    target="_blank"
                    rel="noreferrer"
                >
                    Website
                </StyledLink>
                {/* Github Link */}
                {props.git ? (
                    <>
                        <StyledLink
                            href={props.git}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Git Repository
                        </StyledLink>
                    </>
                ) : (
                    <>
                        <Tooltip title="Sorry. This is a private, company-owned repository.">
                            <StyledLink onClick={handleClick} href="#Projects">
                                Git Repository
                            </StyledLink>
                        </Tooltip>
                        <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                        >
                            <Alert
                                onClose={handleClose}
                                severity="info"
                                sx={{ width: "100%" }}
                            >
                                Sorry. This is a private, company-owned
                                repository.
                            </Alert>
                        </Snackbar>
                    </>
                )}
                {/* Project Video */}
                <ReactPlayer
                    controls={true}
                    width="80%"
                    style={videoStyle}
                    className={classes.video}
                    url={props.url}
                />
                {/* Project Description */}
                {descriptions.map((desc, index) => {
                    return (
                        <Typography
                            key={index}
                            variant="body1"
                            textAlign="left"
                            marginBottom="14px"
                            gutterBottom
                        >
                            {desc}
                        </Typography>
                    );
                })}

                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Features title={props.title} features={props.features} icons={props.icons}/>
                    </Grid>
                    <Grid xs={6}>
                        <StackList title={props.title} stack={props.stack}/>
                    </Grid>

                </Grid>
            </Item>
        </Grid>
    );
}

export default Project;

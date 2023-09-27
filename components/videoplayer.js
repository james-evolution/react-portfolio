import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ReactPlayer from "react-player";
import Slide from "@mui/material/Slide";
import classes from "./styles/videoplayer.module.css";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const videoStyle = {
    margin: "auto",
    marginTop: "24px",
    marginBottom: "8px",
    minWidth: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
};

function VideoPlayer(props) {
    const [open, setOpen] = React.useState(false); // Dialog
    const [scroll, setScroll] = React.useState("paper");

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                variant="contained"
                endIcon={<OpenInNewIcon />}
                onClick={handleClickOpen("paper")}
                className={classes.button}
            >
                Video Demonstration
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                TransitionComponent={Transition}
                keepMounted
                fullWidth={true}
            >
                <DialogTitle
                    id="scroll-dialog-title"
                    sx={{
                        background: "rgb(9,93,101)",
                    }}
                >
                    {props.title}
                </DialogTitle>
                <DialogContent
                    dividers={scroll === "paper"}
                    sx={{
                        background: "rgb(9,73,81)",
                    }}
                >
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        <ReactPlayer
                            className={classes.video}
                            controls={true}
                            url={props.url}
                            style={videoStyle}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions
                    sx={{
                        background: "rgb(9,93,101)",
                    }}
                >
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default VideoPlayer;

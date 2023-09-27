import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Grid from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Slide from "@mui/material/Slide";
import classes from "./styles/stack.module.css";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

function StackList(props) {
    const [techList, setTechList] = useState([]);
    const [open, setOpen] = React.useState(false); // Dialog
    const [scroll, setScroll] = React.useState("paper");

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setTechList(props.stack);
    }, []);

    return (
        // <Grid xs={12}>
            <>
                <Button
                    variant="contained"
                    endIcon={<OpenInNewIcon />}
                    onClick={handleClickOpen("paper")}
                    className={classes.button}
                >
                    Built With
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    TransitionComponent={Transition}
                    keepMounted
                >
                    <DialogTitle
                        id="scroll-dialog-title"
                        sx={{
                            background: "rgb(9,93,101)",
                        }}
                    >
                        Built With
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
                            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                                {techList.map((title, index) => (
                                    <Chip
                                        key={index}
                                        label={title}
                                        color="success"
                                        style={{}}
                                    />
                                ))}
                            </Stack>
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

export default StackList;

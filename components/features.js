import * as React from "react";
import List from "@mui/material/List";
import Grid from "@mui/material/Unstable_Grid2";
import StackList from "./stacklist";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";

function Features(props) {
    const [open, setOpen] = React.useState(false);
    const [featureTitles, setFeatureTitles] = useState([]);

    useEffect(() => {
        setFeatureTitles(props.features);
    }, []);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Grid xs={12}>
            <List
                sx={{ width: "100%", bgcolor: "rgba(0,0,0,0.7)" }}
                component="nav"
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="All Features" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {featureTitles.map((title, index) => (
                            <ListItemButton key={index} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    {props.icons[index]}
                                </ListItemIcon>
                                <ListItemText primary={title} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
                
            </List>
        </Grid>
    );
}

export default Features;

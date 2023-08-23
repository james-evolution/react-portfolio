import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LockIcon from "@mui/icons-material/Lock";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import FilterListIcon from "@mui/icons-material/FilterList";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArchiveIcon from "@mui/icons-material/Archive";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import StorageIcon from "@mui/icons-material/Storage";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import InfoIcon from "@mui/icons-material/Info";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import Grid from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";
import { useState, useEffect } from "react";

function StackList(props) {
    const [open, setOpen] = React.useState(false);
    const [techList, setTechList] = useState([]);

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        setTechList(props.stack);
    }, []);

    return (
        <Grid xs={12}>
            <List
                sx={{ width: "100%", bgcolor: "rgba(0,0,0,0.7)" }}
                component="nav"
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Built With" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {techList.map((title, index) => (
                            <ListItemButton key={index} sx={{ pl: 4 }}>
                                <Chip
                                    label={title}
                                    color="success"
                                    style={{}}
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            </List>
        </Grid>
    );
}

export default StackList;

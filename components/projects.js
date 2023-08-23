"use client"; // This is a client component.

import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Project from "./project";
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
import WalletIcon from "@mui/icons-material/Wallet";
import TokenIcon from "@mui/icons-material/Token";
import ShieldIcon from "@mui/icons-material/Shield";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import AnimationIcon from "@mui/icons-material/Animation";

const twIcons = [
    <LockIcon />,
    <InstallMobileIcon />,
    <ListAltIcon />,
    <GroupIcon />,
    <ManageSearchIcon />,
    <FilterListIcon />,
    <FileDownloadIcon />,
    <ArchiveIcon />,
    <MenuBookIcon />,
    <ChatIcon />,
    <AccountCircleIcon />,
    <PasswordIcon />,
    <StorageIcon />,
    <CalendarMonthIcon />,
    <ChecklistRtlIcon />,
    <InfoIcon />,
    <HeadsetMicIcon />,
];

const dgIcons = [
    <WalletIcon />,
    <TokenIcon />,
    <ShieldIcon />,
    <HandshakeIcon />,
    <CurrencyBitcoinIcon />,
    <AnimationIcon />,
];

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
                        title="TW"
                        url="https://youtu.be/lNIrmQZbdJ4"
                        descriptions={[
                            "A full-stack progressive web application that runs on desktop, mobile, and browser. Intended for customer and order tracking, it boasts an extensive feature list, which is outlined in the dropdown below.",
                            "Secured with user authentication and authorization and an email-based password reset system. There are different user roles in the system, each of which has different permissions.",
                            "It has a Slack-style instant messaging room with different channels, user avatars, presence indicators, and database-persisted chat history. Equipped with audit logs, administrative management systems, webhook integrations, and more.",
                            "Total # of Contributors: 1 (Me)",
                        ]}
                        website="https://trampolineworld.herokuapp.com/"
                        git="https://github.com/james-evolution/trampoline-world"
                        features={[
                            "Login & Security",
                            "Mobile & Desktop",
                            "Order Management",
                            "User Management",
                            "Searching & Sorting",
                            "Resizable, Draggable, & Filterable Columns",
                            "Data Exports",
                            "Order Archives",
                            "Audit Log",
                            "Live Chat Room",
                            "Profile Customization",
                            "Password Resets",
                            "Live Database Configuration",
                            "Date/Time Sorting",
                            "Form Validation",
                            "Tooltips & Helper Text",
                            "Discord Integration",
                        ]}
                        icons={twIcons}
                        stack={[
                            "Java",
                            "Spring Boot",
                            "Spring Boot Starter Mail",
                            "Spring Security",
                            "JPA (Java Persistence API)",
                            "MySQL",
                            "Vaadin Flow Framework",
                            "Jasper Reports",
                        ]}
                    />

                    <Project
                        title="DuckGod"
                        url="https://youtu.be/xHjXRll6DlE"
                        descriptions={[
                            "A full-stack web3 application that allows users to connect their crypto wallet and interact with smart contracts on the Ethereum network. Users can then mint non-fungible tokens directly through the application. Certain sections of the website are token-gated, requiring specific, non-fungible tokens for access.",
                            "This application utilizes numerous third-party libraries, frameworks, and a custom-built API.",
                            "Initial development of the project began in late 2022 at ETH San Francisco, winning a few event-sponsor prizes. It was then formally launched in 2023 and used extensively by its relevant community.",
                            "Total # of Contributors: 6 (Four programmers, two artists)"
                        ]}
                        website="https://duckgod.supducks.com/battle"
                        git=""
                        features={[
                            "Wallet Connection (Cryptocurrency)",
                            "NFT Minting",
                            "Token Gating",
                            "Smart Contract Integration",
                            "Live Blockchain Data Feed",
                            "Animations",
                        ]}
                        icons={dgIcons}
                        stack={[
                            "React.js",
                            "Next.js",
                            "ThirdWeb.js",
                            "Ethers.js",
                            "RainbowKit",
                            "Etherscan",
                            "Lotti",
                        ]}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Projects;

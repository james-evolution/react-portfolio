"use client";

import Image from "next/image";
import classes from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GridContainer from "../../components/gridcontainer";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

export default function Home() {
    return (
        <main>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Header />
                <GridContainer suppressHydrationWarning></GridContainer>
            </ThemeProvider>
        </main>
    );
}

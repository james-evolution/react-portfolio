import * as React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

function Contact() {
    return (
        <Card
            sx={{
                width: "fit-content",
                margin: "auto",
                marginTop: "12px",
                marginBottom: "24px",
                backgroundColor: "rgba(0,0,0,0.5)",
                textAlign: "left",
            }}
        >
            <CardContent>
                <Typography variant="body2">
                    <b>Mobile:</b> 972-849-0855
                    <br />
                    <b>Email:</b> alkireson&#64;gmail.com
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Contact;

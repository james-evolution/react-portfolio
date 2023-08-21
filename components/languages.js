import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import classes from "./languages.module.css";
import Paper from "@mui/material/Paper";

const rows = [
    createData("JavaScript", "2 years", "20 years"),
    createData("HTML", "2 years", "20 years"),
    createData("CSS", "2 years", "20 years"),
    createData("Python", "2 years", "4 years"),
    createData("Java", "-", "13 years"),
    createData("SQL", "-", "9 years"),
    createData("C#", "-", "4 years"),
];

function createData(language, workExperience, totalExperience) {
    return { language, workExperience, totalExperience };
}

function Languages() {
    return (
        <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Language</TableCell>
                        <TableCell align="right">
                            Professional Experience
                        </TableCell>
                        <TableCell align="right">
                            <Tooltip title="Total time spent coding in this language. This includes personal projects, studies, and work experience.">
                                Academic Experience
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.language}
                            </TableCell>
                            <TableCell align="right">
                                {row.workExperience}
                            </TableCell>
                            <TableCell align="right">
                                {row.totalExperience}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Languages;

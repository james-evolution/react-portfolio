import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import classes from "./languages.module.css";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
    //   border: 0,
    },
  }));

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
                    <StyledTableRow>
                        <StyledTableCell>Language</StyledTableCell>
                        <StyledTableCell align="right">
                            Professional Experience
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <Tooltip title="Total time spent coding in this language. This includes personal projects, studies, and work experience.">
                                Academic Experience
                            </Tooltip>
                        </StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    // border: 0,
                                },
                            }}
                        >
                            <StyledTableCell component="th" scope="row">
                                {row.language}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.workExperience}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.totalExperience}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Languages;

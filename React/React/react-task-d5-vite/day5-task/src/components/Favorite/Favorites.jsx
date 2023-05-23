import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CounterCtx } from "../context/Countercontext";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
export default function Favorite() {
  const favorite = useSelector(stata => stata.favorite);
  const dispatch = useDispatch()

  return (
    <>
  <TableContainer component={Paper} className="my-5 text-center">
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>MOVIE NAME</StyledTableCell>
                  <StyledTableCell align="center">
                    PRODUCTION DATE
                  </StyledTableCell>
                  <StyledTableCell align="center">POSTER</StyledTableCell>
                  <StyledTableCell align="center">DELETE</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {favorite.map((f) => (
                  <StyledTableRow key={f.id}>
                    <StyledTableCell component="th" scope="row">
                      {f.Title}
                    </StyledTableCell>
                    <StyledTableCell align="center">{f.Year}</StyledTableCell>
                    <StyledTableCell align="center">
                      <img
                        src={f.Poster}
                        alt={f.Title}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {" "}
                      <Button
                        variant="outlined"
                        color="error"
                        className="mx-5 px-3"
                        style={{ backgroundColor: "darkred", color: "white" }}
                        onClick={() => dispatch(deleteFromFav(f.id))}
                      >
                        DELETE
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </>
  );
}

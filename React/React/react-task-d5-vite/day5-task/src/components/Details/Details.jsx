import { Button, CardActions, IconButton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Swal from "sweetalert2";

const Details = () => {
  const [mDetails, setMdetails] = useState();
const navigate=useNavigate()
  const { movie } = useParams();
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://localhost:3001/movies/${movie}`)
        .then((res) => setMdetails(res.data));
    };
    fetchData();
  }, []);
  const deleteHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
        navigate('/')
    });
  };
  return (
    <Row className="row my-5 ">
      <Col className="col-lg-6 col-md-6 col-12 my-3 text-center">
        <img
          src={mDetails?.Poster}
          style={{ width: "100%", height: "100%" }}
          className="col-12 col-md-6 col-lg-6"
        />
      </Col>
      <Col
        className="col-lg-6 col-md-6 col-12 my-3 text-center"
        style={{ color: "white" }}
      >
        <h1>{mDetails?.Title}</h1>
        <h5
          style={{
            color: "orange",
            letterSpacing: "1px",
            lineHeight: "30px",
          }}
        >
          {mDetails?.Description}
        </h5>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" className="me-5">
            <FavoriteIcon style={{ color: "red" }} />
          </IconButton>
          <Button variant="contained" color="success">
            EDIT
          </Button>
          <Button
            variant="outlined"
            style={{ backgroundColor: "darkred", color: "white" }}
            color="error"
            onClick={() => deleteHandler(mDetails.id)}
            className="mx-5"
          >
            DELETE
          </Button>
        </CardActions>
      </Col>
    </Row>
  );
};

export default Details;

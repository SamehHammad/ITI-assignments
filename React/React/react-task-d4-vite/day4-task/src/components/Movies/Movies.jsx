import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./movies.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { CounterCtx } from "../context/Countercontext";

const Users = () => {
  return (
    <>
      <CounterCtx.Consumer>
        {({ favHandle, movies, deleteHandler,heartRef }) => {
          return (
            <Row className="my-5 text-center">
              {movies?.map((m) => (
                <Col
                  className="col-lg-4 col-md-6 col-12 my-3 text-center"
                  key={m.id}
                >
                  <Card
                    sx={{ maxWidth: 322, maxHeight: 450 }}
                    key={m.id}
                    className="card"
                  >
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          {m.Title.split("")[0]}
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={m.Title}
                      subheader={m.Year}
                      className="title"
                    />
                    <Link to={`/details/${m.id}`}>
                      <CardMedia
                        component="img"
                        height="174"
                        image={m.Poster}
                        alt="Paella dish"
                        className="mov-img"
                      />
                    </Link>
                    <CardContent>
                      <Typography paragraph style={{ color: "orange" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        doloribus...
                        <Link to={`/details/${m.id}`}>Read More...</Link>
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton
                        aria-label="add to favorites"
                        className="me-5"
                        onClick={() => favHandle(m)}
                      >
                        <FavoriteIcon
                          ref={heartRef}
                          style={{ color: "white", fontSize: "40px" }}
                          id="heart"
                        />
                      </IconButton>
                      <Button variant="contained" color="success">
                        EDIT
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => deleteHandler(m.id)}
                        className="mx-5 px-3"
                        style={{ backgroundColor: "darkred", color: "white" }}
                      >
                        DELETE
                      </Button>
                    </CardActions>
                  </Card>
                </Col>
              ))}
            </Row>
          );
        }}
      </CounterCtx.Consumer>
    </>
  );
};

export default Users;

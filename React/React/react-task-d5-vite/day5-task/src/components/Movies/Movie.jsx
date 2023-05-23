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
import { Col } from "react-bootstrap";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const Movie = ({ id, Title, Year, Poster, deleteMovie , favHandle ,addToFavorite}) => {
  const navigate = useNavigate()
  return (
      <>
      <Col className="col-lg-4 col-md-6 col-12 my-3 d-flex justify-content-center " >
            <Card
              sx={{ maxWidth: 322, maxHeight: 450 }}
              className="card "
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {Title.split("")[0]}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={Title}
                subheader={Year}
                className="title"
              />
              <Link to={`/details/${id}`}>
                <CardMedia
                  component="img"
                  height="174"
                  image={Poster}
                  alt="Paella dish"
                  className="mov-img"
                />
              </Link>
              <CardContent>
                <Typography paragraph style={{ color: "orange" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  doloribus...
                  <Link to={`/details/${id}`}>Read More...</Link>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  className="me-5"
                  onClick={addToFavorite}
                >
                  <FavoriteIcon
                    style={{ color: "white", fontSize: "40px" }}
                    id="heart"
                  />
                </IconButton>
            <Link to={`/update/${id}`}>
            <Button
                  variant="contained"
              color="success"
                >
                  EDIT
                </Button>
            </Link>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={deleteMovie}
                  className="mx-5 px-3"
                  style={{ backgroundColor: "darkred", color: "white" }}
                >
                  DELETE
                </Button>
              </CardActions>
            </Card>
          </Col>
      </>
  )
}

export default Movie;
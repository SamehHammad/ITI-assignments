import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteHandler, fetchMovies } from "../slice/moviesSlice";
import Movie from "./Movie";
import { Row } from "react-bootstrap";
import { addToFavorite } from "../slice/favoriteSlice";

const Users = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
    console.log(movies);
  }, [dispatch]);
  return (
    <>
      <Row className="my-5 text-center">
        {movies?.map((m) => (
          <Movie
            id={m.id}
            Title={m.Title}
            Poster={m.Poster}
            Year={m.Year}
            key={m.id}
            deleteMovie={() => dispatch(deleteHandler(m.id))}
            addToFavorite={() => dispatch(addToFavorite(m))}
          />
        ))}
      </Row>
    </>
  );
};

export default Users;

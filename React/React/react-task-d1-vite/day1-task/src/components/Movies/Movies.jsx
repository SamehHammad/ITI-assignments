import Movie from "../Movie/Movie";

const Movies = () => {
  const movies = [
    { id: 1, mvName: "Titanic", director: "James Cameron", year: 1997 },
    { id: 2, mvName: "Best of Enemies", director: "Robert Gordon", year: 2019 },
    { id: 3, mvName: "Twilight", director: "Catherine Hardwick", year: 2008 },
  ];
  return <>
    {movies.map(movie => (
      <Movie {...movie} />
    )
    )}
    </>
};

export default Movies;

import "./Movie.css"
const Movie = ({ id, mvName, director, year }) => {
  return (
    <div key={id} className="card grid">
      <p>Name: <span>{mvName}</span></p>
      <p>Director: <span>{director}</span></p>
      <p>Year: <span>{year}</span></p>
    </div>
  );
};

export default Movie;

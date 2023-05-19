import "./Movie.css"
const Movie = ({ id, mvName, director, year }) => {
  return (
    <div className="card" key={id}>
      <p className="name"><span>ID :</span> {id}</p>
      <h3 className="name"><span>Name:</span> {mvName}</h3>
      <h3 className="dir"><span>Director: </span>{director}</h3>
      <h3 className="year"><span>Year: </span>{year}</h3>
    </div>
  );
};

export default Movie;

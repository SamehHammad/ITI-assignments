import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./components/Movies/Movies";
import Navbarr from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Favorites from "./components/Favorite/Favorites";
import Details from "./components/Details/Details";
import Countercontext from "./components/context/Countercontext";

const App = () => {
  
  return (
    <>
      <Countercontext>

      <Navbarr />
      <Container className="apppp">
        <Routes>
          <Route path="/" element={<Movies  />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/details/:movie" element={<Details />} />
          <Route path="*" element={<h1>ERROR</h1>} />
        </Routes>
      </Container>
      </Countercontext>
    </>
  );
};

export default App;

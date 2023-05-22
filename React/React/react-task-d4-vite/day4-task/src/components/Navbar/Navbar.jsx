import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
import { CounterCtx } from "../context/Countercontext";

const Navbarr = () => {
  return (
    <CounterCtx.Consumer>
      {
        ({favCounter}) => {
          return(
            <Navbar fixed="top" bg="dark" expand="lg" className="navv">
            <Container>
                <Link to={'/'} style={{textDecoration:"none"}}>
                <Navbar.Brand style={{ color: "white", fontSize: "25px" }}>
                M<span style={{ color: "red" }}>OVIES</span>
              </Navbar.Brand>
                </Link>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto mx-5 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Link className="navbar-brand " to="/" style={{ color: "white" }}>
                    Home
                  </Link>
                  <Link
                    className="navbar-brand fav"
                    to="/favorites"
                    style={{ color: "white" }}
                  >
                    Favorites
                      <span>{favCounter }</span>
                  </Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ height: "35px" }}
                  />
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          )
        }
      }
   </CounterCtx.Consumer>
  );
};

export default Navbarr;
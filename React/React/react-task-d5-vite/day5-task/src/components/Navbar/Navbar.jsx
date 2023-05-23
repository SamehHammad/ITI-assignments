import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useSelector } from "react-redux";
import CustomizedInputBase from "../Movies/Search";

const Navbarr = () => {
  const favorite=useSelector((state)=>state.favorite)
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log(i18next.language);
  };
  return (
    <>
       <Navbar fixed="top" bg="dark" expand="lg" className="navv">
            <Container>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Navbar.Brand style={{ color: "white", fontSize: "25px" }}>
                  {t("M")} <span style={{ color: "red" }}> {t("OVIES")}</span>
                </Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto mx-5 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Link
                    className="navbar-brand "
                    to="/"
                    style={{ color: "white" }}
                  >
                    {t("Home")}
                  </Link>
                  <Link
                    className="navbar-brand fav"
                    to="/favorites"
                    style={{ color: "white" }}
                  >
                    {t("Favorites")}
                    <span>{favorite.length}</span>
                  </Link>
                </Nav>
            <Form className="d-flex">
              <CustomizedInputBase  placeH={t("Search")}/>
                 
                </Form>
              </Navbar.Collapse>
              {i18next.language === "en" ? (
                <button onClick={() => changeLanguage("ar")}>AR</button>
              ) : (
                <button onClick={() => changeLanguage("en")}>EN</button>
              )}
            </Container>
          </Navbar>
    </>
  );
};

export default Navbarr;

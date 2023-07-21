import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./component.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <div className="container navbar">
        <Navbar fixed="top">
          <Container>
            <NavLink to="/" className="navbar-brand">
              Online Store
            </NavLink>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink className="navlink px-2 mx-2" to="/cart">
                  Cart
                </NavLink>
                <NavLink className="navlink px-2 mx-2" to="">
                  Cart Item : {items.length}
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default MainNav;

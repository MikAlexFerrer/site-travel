import { useContext } from "react";
import { Context } from "../../context/Context";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Navbar.Brand className="topListItem">
          <Nav.Link className="link" href="/">ENDURANCE</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <li className="topListItem">
              <Nav.Link className="link" href="/hotels">
                HOTELS
              </Nav.Link>
            </li>
            <li className="topListItem">
              <Nav.Link className="link" href="/about">
                ABOUT
              </Nav.Link>
            </li>
            <li className="topListItem">
              <Nav.Link className="link" href="/contact">
                CONTACT
              </Nav.Link>
            </li>
            <li className="topListItem">
              <Nav.Link className="link" href="/reservations">
                RESERVATIONS
              </Nav.Link>
            </li>
            <Nav.Link className="topListItem" onClick={handleLogout}>
              {user && "LOG OUT"}
            </Nav.Link>
          </Nav>
          <div className="topRight">
            {user ? (
              <Nav.Link href="/settings">
                <img className="topImg" src={PF+user.profilePic} alt="" />
              </Nav.Link>
               ) : (
              <ul className="topList">
                <li className="topListItem">
                  <Nav.Link className="link" href="/login">
                    LOGIN
                  </Nav.Link>
                </li>
                <li className="topListItem">
                  <Nav.Link className="link" href="/register">
                    REGISTER
                  </Nav.Link>
                </li>
              </ul>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}